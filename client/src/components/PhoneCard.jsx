import React from 'react';
import { BsTelephoneOutbound } from 'react-icons/bs'
import { MdDelete, MdAdd } from "react-icons/md"

const PhoneCard = () => {
    return (
        <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 flex justify-between">
            <div class="flex-row gap-4 flex justify-center items-center">
                <div class="flex-shrink-0">
                    <BsTelephoneOutbound></BsTelephoneOutbound>
                </div>
                <div class=" flex flex-col">
                    <span class="text-gray-600 dark:text-white text-lg font-medium">
                        zeel prajapati
                    </span>
                    <span class="text-gray-400 text-xs">
                        +91 9328517461
                    </span>
                </div>
            </div>
            <div class="flex gap-2">
                <button type="button" class="py-1 px-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-lg ">
                    <MdAdd className="text-white" size={18}></MdAdd>
                </button>
                <button type="button" class="py-1 px-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-lg ">
                    <MdDelete className="text-white" size={18}></MdDelete>
                </button>
            </div>
        </div>

    );
}

export default PhoneCard;
