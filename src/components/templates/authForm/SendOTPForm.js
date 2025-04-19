"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import { useSendOtp } from "@/core/services/mutations";
import { ValidationPhone } from "@/components/module/authForm/ValidationPhone";




function SendOTPForm({ phone, setPhone, setStep, setIsOpen }) {
  const { isPending, mutate } = useSendOtp();

  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
  
    
    mutate(
      { phone },
      {
        onSuccess: (data) => {
          toast(`otp code: ${data?.data?.code}`);
          toast.success(data?.data?.message);
          setStep(2);     
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };
  return (
    <>
      <div className="md:card md:w-[392px] md:h-[370px] md:bg-base-100 md:shadow-sm bg-base-100 w-full ">
        <div className="card-body">
        <button onClick={()=>setIsOpen(false)}>
            <ImCross/>
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
              className="md:hidden  my-10px flex justify-center align-center m-auto "
            />
          </div>
          <form
            className="flex flex-col gap-4 mt-4 text-black"
            onSubmit={sendOtpHandler}
          >
            <h4 className="text-[#353535] font-normal text-center dark:text-white">
              Login/Register
            </h4>
            <label className="label">
              <span className="label-text text-[12px] text-[#717171]  text-center m-auto dark:text-white">
                Enter Your Mobile Phone
              </span>
            </label>
           <ValidationPhone phone={phone} setPhone={setPhone}/>
            <button className="btn bg-[#417F56] mt-4 text-white my-0" type="submit">
              Send Code
            </button>
            <p className="text-gary-500 text-[10px] text-center dark:text-white">
          Becoming a member of Mehmoni constitutes acceptance of the rules.</p>

          </form>
        </div>
      </div>
    </>
  );
}

export default SendOTPForm;
