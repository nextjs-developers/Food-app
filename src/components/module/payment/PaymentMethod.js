"use client"
import Image from 'next/image';
import  { useState } from 'react'
import { PiWarningOctagonLight } from 'react-icons/pi';

function PaymentMethod() {
    const [paymentMethod, setPaymentMethod] = useState("");

    const methodHandler = (e) => {
      setPaymentMethod(e.target.value);
    };
  return (
    <>
         <div className="border border-[#e1e1e1] flex md:flex-row flex-col md:gap-[24px] gap-[15px] radius-8 p-6">
            <label className="flex gap-[4px] items-center md:text-[16px] body-[14px]">
              <Image
                src="/icons/wallet-money.svg"
                width={24}
                height={24}
                alt="wallet"
                className='md:w-[24px] md:h-[24px] w-[14px] h-[14px]'
              />
              Payment Method
            </label>
            <div className="flex gap-[20px] ">
              <div className="flex gap-[4px]">
                <input
                  id="online"
                  type="radio"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={methodHandler}
                  className="mx-1 checked:ring-primary checked:border-primary body-sm focus:ring-primary transition"
                />
                <label
                  className="cursor-pointer flex flex-col text-gray-dark md:text-[16px] body-[14px]"
                  htmlFor="online"
                >
                  Internet payment
                  <span className="caption-sm">
                    To be sent by restaurant courier.{" "}
                  </span>
                </label>
                <Image
                  src="/icons/card-pos.svg"
                  width={24}
                  height={24}
                  alt="card-pos"
                className='md:w-[24px] md:h-[24px] w-[14px] h-[14px]'
                />
              </div>

              <div className="flex gap-[4px]">
                <input
                  id="cash"
                  type="radio"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={methodHandler}
                  className="mx-1 checked:ring-primary checked:border-primary body-sm  focus:ring-primary transition"
                />
                <label
                  className="cursor-pointer flex flex-col text-gray-dark md:text-[16px] text-[14px]"
                  htmlFor="cash"
                >
                  cash payment
                  <span className="caption-sm">
                    To be sent by restaurant courier.{" "}
                  </span>
                </label>
                <Image
                  src="/icons/wallet-2.svg"
                  width={24}
                  height={25}
                  alt="wallet"
                  className='md:w-[24px] md:h-[24px] w-[14px] h-[14px]'
                />
              </div>
            </div>
          </div>
          <div>
            {paymentMethod === "cash" && (
              <div className=" p-4 border border-[#e1e1e1] radius-8 flex gap-[4px] items-center bg-[#f9f9f9]">
                <span>
                  <PiWarningOctagonLight className="w-[24px]" />
                </span>
                <h5 className="w-[30%] body-md"> pay attention </h5>
                <p className="text-[#717171] caption-sm">
                  Your order will be charged upon delivery. Please have a credit
                  card or cash with you before delivery and do not request
                  payment at a later time or on credit. Thank you for your
                  cooperation.
                </p>
              </div>
            )}

            {paymentMethod === "online" && (
              <div className="p-4 border border-[#e1e1e1] radius-8 flex md:flex-row flex-col  gap-[24px]  ">
                <div className="flex items-start  gap-[4px]">
                  <Image
                    src="./icons/card.svg"
                    width={24}
                    height={24}
                    alt="card"
                     className='md:w-[24px] md:h-[24px] w-[14px] h-[14px]'
                  />
                  <p className='md:text-[16px] text-[14px]'>Payment gateway</p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="flex justify-center gap-[20px]">
                    <Image src="/images/saman.webp" width={100} height={100} alt="banke-saman" className="grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 border border-[#e1e1e1] hover:border-primary radius-4"/>
                    <Image src="/images/mellat.webp" width={100} height={100} alt="banke-mellat" className="grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 border border-[#e1e1e1] hover:border-primary radius-4"/>
                    <Image src="/images/parsiyan.webp" width={100} height={100} alt="banke-parsiyan" className="grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 border border-[#e1e1e1] hover:border-primary radius-4"/>
                  </div>
                  <p className="caption-md text-center text-[#717171] mt-[10px]">Payment is possible through all Shetab member cards.</p>
                  <p className="caption-sm text-center text-[#717171]">(Please turn off your anti-spam before paying.)</p>
                </div>
              </div>
            )}
          </div>
    </>
  )
}

export default PaymentMethod
