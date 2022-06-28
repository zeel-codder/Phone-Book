import React from 'react';
import codes from 'country-calling-code';
import { useState } from 'react'
import {
    createPhoneNumber,
    updatePhoneNumber,
} from '../Api/phone'
const PhoneNumberForm = ({ closeForm, isEditForm, _id, first_name, last_name, country_code, phone_number }) => {

    const initialData = {
        id: _id || "",
        first_name: first_name || "",
        last_name: last_name || "",
        country_code: country_code || "",
        phone_number: phone_number || ""
    }
    const [data, setData] = useState(initialData)
    const [message, setMessage] = useState("")

    const add = () => {
        createPhoneNumber(data).then((e) => {
            window.location.reload()
        }).catch((e) => {
            setMessage("Something went wrong")
            console.log(e)
            setTimeout(() => {
                setMessage("")
            }, 5000)
        })
    }

    const update = () => {
        updatePhoneNumber(data).then((e) => {
            window.location.reload()
        }).catch((e) => {
            setMessage("Something went wrong")
            console.log(e)
            setTimeout(() => {
                setMessage("")
            }, 5000)
        })
    }

    const handleSubmit = () => {
        console.log(data)
        if (isEditForm) {
            update()
        } else {
            add()
        }
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }




    return (
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden absolute top-5">
            <div className="px-4 py-8 sm:px-10">
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">
                            Add Phone Number
                        </span>
                    </div>
                </div>

                <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-2 mt-6  bg-white text-red-500">

                        {message}
                    </span>
                </div>

                <div className="mt-6">
                    <div className="w-full space-y-10">
                        <div className="w-full">
                            <div className=" relative ">
                                <input type="text" id="search-form-price" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="First Name" name="first_name" onChange={handleChange}
                                    value={data.first_name} />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <input type="text" id="search-form-location" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Last Name" name="last_name" onChange={handleChange}
                                    value={data.last_name} />
                            </div>
                        </div>

                        <select className="block w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="country_code"
                            onChange={handleChange}
                            value={data.country_code}
                        >
                            <option value="">
                                Select an option
                            </option>
                            {
                                codes.map(({ countryCodes, country }) => {
                                    return (
                                        <option value={countryCodes}>
                                            {country}
                                        </option>
                                    )
                                })
                            }

                        </select>

                        <div className="w-full">
                            <div className=" relative ">
                                <input type="text" id="search-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone"
                                    name="phone_number"
                                    onChange={handleChange}
                                    value={data.phone_number}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md  rounded-lg " onClick={handleSubmit}>
                                    Save
                                </button>
                            </span>
                            <span className="block w-full rounded-md shadow-sm" onClick={closeForm}>
                                <button type="button" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md  rounded-lg ">
                                    Close
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneNumberForm;
