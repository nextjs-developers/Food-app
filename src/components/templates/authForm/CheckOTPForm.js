"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";


function CheckOTPForm({ mobile, setStep, setIsOpen }) {
  const [code, setCode] = useState("");

 
  return (
    <div className="flex flex-col w-[358px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-6">
    <h4 className="text-xl font-bold text-center">Please, Enter Your Code</h4>
    <form className="flex flex-col justify-end gap-10 flex-1">
      <label className="label">
        <span className="label-text">Mobile Number {mobile}</span>
      </label>
      <div className="flex justify-center" style={{ direction: "ltr" }}>
        <OtpInput
          value={code}
          onChange={changeHandler}
          numInputs={6}
          inputStyle={{
            border: "1px solid silver",
            borderRadius: "5px",
            width: "49px",
            height: "45px",
            marginRight: "5px",
          }}
        />
      </div>
      <button
        className="btn btn-success h-11 text-white rounded-md"
        onClick={() => setIsOpen(false)}
      >
        login
      </button>
    </form>
  </div>
  );
}

export default CheckOTPForm;
