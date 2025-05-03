"use client"
import { useState } from 'react'
import { RiDiscountPercentLine } from 'react-icons/ri';

function DiscountCode() {
    const [discountCode, setDiscountCode] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
  
  
    const DiscountCodeSubmit = () => {
      setIsSubmitted(true);
      //send to server
      console.log("discount code:", discountCode);
    };
  return (
    <div className="border border-[#e1e1e1] flex md:flex-row flex-col md:gap-[24px] gap-[15px] radius-8 p-4">
            <label className="flex gap-[4px] items-center md:body-md body-sm">
              <RiDiscountPercentLine className="md:w-[24px] w-[14px]" />
              Register Discount Code
            </label>
            <div className="flex md:gap-[20px] gap-[10px]">
              <input
                type="text"
                placeholder="Discount Code"
                className="input border md:w-[320px] w-[] border-[#e1e1e1]"
                value={discountCode}
                onChange={(e) => {
                  setDiscountCode(e.target.value);
                  setIsSubmitted(false);
                }}
              />

              <button
                onClick={DiscountCodeSubmit}
                disabled={!discountCode.trim()}
                className={`btn ${
                  !discountCode.trim() ? "btn-disabled" : "btn-primary"
                }`}
              >
                {isSubmitted ? "Code Applied" : " Apply code "}
              </button>
            </div>
          </div>
  )
}

export default DiscountCode
