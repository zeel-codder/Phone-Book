import React from 'react';
import { BsTelephoneOutbound } from 'react-icons/bs'
import { MdDelete } from "react-icons/md"
import { FiEdit2 } from "react-icons/fi"
import { deletePhoneNumber } from '../Api/phone'

const PhoneCard = ({ _id, openForm, first_name, last_name, country_code, phone_number, index }) => {


    const deletePhoneNumbers = () => {
        deletePhoneNumber({ id: _id }).then(() => {
            console.log("deleted")
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 flex justify-between"
        >
            <div className="flex-row gap-4 flex justify-center items-center">
                <div className="flex-shrink-0">
                    <BsTelephoneOutbound></BsTelephoneOutbound>
                </div>
                <div className=" flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                        {first_name} {last_name}
                    </span>
                    <span className="text-gray-400 text-xs">
                        +{country_code} {phone_number}
                    </span>
                </div>
            </div>
            <div className="flex gap-2">
                <button type="button" className="py-1 px-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-lg "
                    onClick={() => {
                        openForm(true, index)
                    }}

                >
                    <FiEdit2 className="text-white" size={18}></FiEdit2>
                </button>
                <button type="button" className="py-1 px-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-lg "
                    onClick={deletePhoneNumbers}
                >
                    <MdDelete className="text-white" size={18}></MdDelete>
                </button>
            </div>
        </div>

    );
}

export default PhoneCard;
