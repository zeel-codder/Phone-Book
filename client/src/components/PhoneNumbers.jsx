import PhoneCard from "./PhoneCard";
import PhoneNumberForm from "./PhoneNumberForm";
import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md"
import { getPhoneNumbers } from '../Api/phone'

function PhoneNumbers() {

    const [isShowForm, setIsShowForm] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);
    const [querySet, setQuerySet] = useState({ query: "", page: 1, item_per_page: 10 });
    const [phoneNumbers, setPhoneNumbers] = useState([]);

    const closeForm = () => {
        setIsShowForm(false);
        setIsEditForm(false);
    }

    const openForm = (isEditedModeOn = false) => {
        if (isEditedModeOn) {
            setIsEditForm(true)
        }
        setIsShowForm(true);
    }

    const FetchData = () => {
        getPhoneNumbers(querySet).then((res) => {
            setPhoneNumbers(res.data.data)
        }).catch((err) => { console.log(err) })
    }

    useEffect(() => {
        FetchData()
    }, [])


    return (
        <div className="flex flex-col items-center justify-center gap-16 mt-10 ">
            <div className=" text-3xl flex gap-2 align-middle justify-center">
                <span>
                    Phone Book
                </span>
            </div>

            <div className=" fixed left-6 bottom-6">
                <button onClick={openForm} type="button" class="py-2 px-2 flex items-center   bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-lg ">
                    <MdAdd className="text-white" size={18}></MdAdd>
                    Add
                </button>
            </div>
            <div className="w-3/4 grid grid-cols-2 gap-5">
                {
                    phoneNumbers.map((data) => {
                        return (
                            <PhoneCard key={data._id} {...data} FetchData={FetchData} openForm={openForm}></PhoneCard>
                        )
                    })
                }
            </div>

            {
                isShowForm
                &&
                <PhoneNumberForm closeForm={closeForm} isEditForm={isEditForm}> </PhoneNumberForm>
            }

        </div>
    );
}

export default PhoneNumbers;
