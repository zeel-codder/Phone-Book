import PhoneCard from "./PhoneCard";
import PhoneNumberForm from "./PhoneNumberForm";
import { useState, useEffect } from "react";

function PhoneNumbers() {



    return (
        <div className="flex flex-col items-center justify-center gap-16 mt-10 ">
            <div className=" text-3xl flex gap-2 align-middle justify-center">
                <span>
                    Phone Book
                </span>
            </div>
            <div className="w-3/4 grid grid-cols-2 gap-5">
                <PhoneCard></PhoneCard>
                <PhoneCard></PhoneCard>
                <PhoneCard></PhoneCard>
                <PhoneCard></PhoneCard>
                <PhoneCard></PhoneCard>
                <PhoneCard></PhoneCard>
            </div>

            <PhoneNumberForm></PhoneNumberForm>
        </div>
    );
}

export default PhoneNumbers;
