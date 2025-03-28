"use client";

import { ImCross } from "react-icons/im";

function SendOTPForm({ mobile, setMobile, setStep, setIsOpen, isOpen }) {
  console.log(isOpen);
  // const [error, setError] = useState("");

  // const { isPending, mutate } = useSendOtp();

  // const sendOtpHandler = (event) => {
  //   event.preventDefault();

  //   if (isPending) return;
  //   if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
  //   setError("");

  //   mutate(
  //     { mobile },
  //     {
  //       onSuccess: (data) => {
  //         toast.success(data?.data?.message);
  //         toast(data?.data?.code);
  //         setStep(2);
  //       },
  //       onError: (error) => {
  //         console.log(error);
  //       },
  //     }
  //   );
  // };

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <button onClick={() => setIsOpen(false)}>
          <ImCross />
        </button>
        <h2 className="card-title justify-center text-2xl font-bold">
          Login Form
        </h2>
        <form className="flex flex-col gap-4 mt-4">
          <label className="label">
            <span className="label-text">Please Enter Your Mobile Phone</span>
          </label>
          <input
            type="text"
            placeholder="+98123****"
            className="input input-bordered w-full outline-none focus:outline:none hover:outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button className="btn btn-success mt-4 text-white" onClick={()=>setStep(2)}>Send Code</button>
        </form>
      </div>
    </div>
  );
}

export default SendOTPForm;
