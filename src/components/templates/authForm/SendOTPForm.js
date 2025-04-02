import Image from "next/image";
import { ImCross } from "react-icons/im";

function SendOTPForm({
  mobile,
  setMobile,
  setStep,
  setIsOpen,
  isOpen,
  refrence,
}) {
  return (
    <div className="md:card md:w-[392px] md:h-[302px] md:bg-base-100 md:shadow-sm bg-base-100 w-full">
      <div className="card-body" ref={refrence}>
        <button onClick={() => setIsOpen(false)}>
          <ImCross className="text-gray-500" />
        </button>
        <div className="my-15px">
          <Image
            src="/images/mehmoni.png"
            width={153}
            height={22}
            alt="mehmoni-logo"
            className="hidden md:block flex justify-center align-center m-auto "
          />
          <Image
            src="/images/mehmoni-mobile.png"
            width={162}
            height={92}
            alt="mehmoni-logo"
            className="md:hidden block my-10px flex justify-center align-center m-auto "
          />
        </div>
        <form className="flex flex-col gap-4 mt-4 text-black">
          <h4 className="text-[#353535] font-normal text-center ">
            Login/Register
          </h4>
          <label className="label">
            <span className="label-text text-[12px] text-[#717171]  text-center m-auto">
              {" "}
              Enter Your Mobile Phone
            </span>
          </label>
          <input
            type="text"
            placeholder="+98123****"
            className="input input-bordered w-full outline-none focus:outline:none hover:outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button
            className="btn btn-success mt-4 text-white"
            onClick={() => setStep(2)}
          >
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendOTPForm;
