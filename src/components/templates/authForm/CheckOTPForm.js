"use client";

import Timer from "@/components/module/element/Timer";
import { useCheckOtp } from "@/core/services/mutations";
import Image from "next/image";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import OtpInput from "react-otp-input";

function CheckOTPForm({ phone, setStep, setIsOpen }) {
  const [otp, setOtp] = useState("");


  const { isPending, mutate } = useCheckOtp();

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    mutate(
      { phone, otp },
      {
        onSuccess: async (data) => {
          console.log(data);
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="md:card md:w-[392px] md:h-[370px] md:bg-base-100 md:shadow-sm bg-base-100 w-full">
      <div className="card-body">
        <button onClick={() => setIsOpen(false)}>
          <ImCross className="text-gray-500" />
        </button>
        <div className="my-15px">
          <Image
            src="/images/mehmoni.png"
            width={153}
            height={22}
            alt="mehmoni-logo"
            className="hidden md:flex justify-center align-center m-auto "
          />
          <Image
            src="/images/mehmoni-mobile.png"
            width={162}
            height={92}
            alt="mehmoni-logo"
            className="md:hidden my-10px flex justify-center align-center m-auto "
          />
        </div>
        <form className="flex flex-col gap-4 mt-4 text-black" onSubmit={checkOtpHandler}>
          <h4 className="text-[#353535] font-normal text-center dark:text-white ">
            Verification Code
          </h4>
          <label className="label">
            <span className="label-text text-[12px] text-[#717171] text-center m-auto dark:text-white">
              A five-digit verification code was sent to the {phone}.
            </span>
          </label>
          <div className="flex justify-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                border: "1px solid silver",
                borderRadius: "5px",
                width: "49px",
                height: "45px",
                marginRight: "5px",
                margin: "0 8px",
              }}
            />
          </div>
          
          <div className="flex justify-center w-full items-center ">
            <p
              className="cursor-pointer dark:text-white hover:opacity-50 transition text-gray-500 "
              onClick={() => setStep(1)}
            >
              Edit Mobile
            </p>
            <Timer phone={phone} />
          </div>
          <button className="btn bg-[#417F56] mt-4 text-white" type="submit">
            Confirmation
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckOTPForm;
