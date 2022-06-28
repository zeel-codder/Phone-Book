import PhoneCard from "./PhoneCard";
import PhoneNumberForm from "./PhoneNumberForm";
import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md"
import { useCallback } from "react";
import { getPhoneNumbers } from '../Api/phone'

function PhoneNumbers() {

    const initialQuerySet = { query: "", page: 1, item_per_page: 10 };


    const [isShowForm, setIsShowForm] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);
    const [querySet, setQuerySet] = useState(initialQuerySet);
    const [queryEnd, setQueryEnd] = useState(false);
    const [phoneNumbers, setPhoneNumbers] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState({});

    const closeForm = () => {
        setIsShowForm(false);
        setIsEditForm(false);
        setPhoneNumber({})
    }

    const openForm = (isEditedModeOn = false, index = -1) => {
        if (isEditedModeOn) {
            setIsEditForm(true)
            setPhoneNumber(phoneNumbers[index])
            console.log("call")
        }
        setIsShowForm(true);
    }

    const FetchData = (query, isNew = false) => {
        setQuerySet(query);
        console.log("call fetch")
        getPhoneNumbers(query).then((res) => {
            if (res.data.data.length === 0) {
                setQueryEnd(true);
                if (isNew) {
                    setPhoneNumbers([])
                }
                return;
            }
            if (isNew) {
                setQueryEnd(false);
                setPhoneNumbers([...res.data.data])
            } else {
                setPhoneNumbers([...phoneNumbers, ...res.data.data])
            }
        }).catch((err) => { console.log(err) })
    }

    const querySearch = (e) => {
        const query = e.target.value;
        if (query.length === 0) {
            FetchData(initialQuerySet, true)
            return;
        }
        if (query.length < 3) return;
        const newQuery = { ...initialQuerySet, query: query };
        FetchData(newQuery, true)
    }

    const last = useCallback((node) => {
        if (!node || queryEnd) return;
        let observe = new IntersectionObserver((e) => {
            // console.log('call'
            if (e[0].isIntersecting) {

                FetchData({ ...querySet, page: querySet.page + 1 })
            }
        });
        observe.observe(node);
    }, []);


    useEffect(() => {
        FetchData(initialQuerySet)
    }, [])


    return (
        <div className="flex flex-col items-center justify-center gap-16 mt-10 ">
            <div className=" text-3xl flex gap-2 align-middle justify-center">
                <span>
                    Phone Book
                </span>
            </div>

            <div className="w-3/4 ">
                <div className=" relative ">
                    <input type="text" id="search-form-location" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base outline-none ring-2 ring-purple-600" placeholder="At list 3 character to Search ..."
                        onChange={querySearch}
                    />
                </div>
            </div>

            <div className=" fixed left-6 bottom-6">
                <button onClick={() => openForm()} type="button" className="py-2 px-2 flex items-center   bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-lg ">
                    <MdAdd className="text-white" size={18}></MdAdd>
                    Add
                </button>
            </div>
            <div className="w-3/4 grid grid-cols-2 gap-5">
                {
                    phoneNumbers.map((data, index) => {
                        return (
                            <div key={data._id}>
                                {
                                    phoneNumbers.length - 1 === index
                                        ?
                                        <div ref={last}>
                                            < PhoneCard
                                                {...data}
                                                index={index}
                                                FetchData={FetchData} openForm={openForm}></PhoneCard>
                                        </div>
                                        :

                                        < PhoneCard {...data}
                                            index={index}
                                            FetchData={FetchData} openForm={openForm}></PhoneCard>
                                }
                            </div>
                        )
                    })
                }
            </div>

            {
                isShowForm
                &&
                <PhoneNumberForm {...phoneNumber} closeForm={closeForm} isEditForm={isEditForm}> </PhoneNumberForm>
            }

        </div >
    );
}

export default PhoneNumbers;
