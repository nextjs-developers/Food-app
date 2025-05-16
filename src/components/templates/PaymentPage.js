"use client"
import Image from "next/image";
import PaymentSteps from "../module/payment/PaymentSteps";
import PaymentMethod from "../module/payment/PaymentMethod";
import DiscountCode from "../module/payment/DiscountCode";
import ShoppingList from "../module/payment/ShoppingList";
import Link from "next/link";
import { CiCreditCard1 } from "react-icons/ci";

function PaymentPage() {  
  return (
    <div>
      <PaymentSteps />
      <div className="flex md:flex-row flex-col justify-center items-center md:items-start md:gap-[20px] gap-[15px] md:mx-auto  md:w-[1300px] min-h-fit my-[30px]">
        <div className="flex flex-col gap-[20px] md:w-[60%]">
          <DiscountCode />
          <PaymentMethod />
        </div>

        <div className="border border-[#e1e1e1] flex flex-col  gap-[24px] radius-8 w-full md:mx-auto mx-[10px] p-5  md:w-[40%]">
          <div className="flex justify-between w-full items-start  border-b border-b-[#e1e1e1] pb-2 ">
            <h4>
              shopping cart<span>(num)</span>
            </h4>
            <Image src="./icons/trash.svg" width={24} height={24} alt="trash" />
          </div>
          <ShoppingList />
          
            <Link href="/">
              <button className="btn btn-primary text-white w-full m-auto">
               <CiCreditCard1  className="text-white md:w-[24px] md:h-[24px] w-[14px] h-[14px] text-[14px] md:text-[16px]" /> Confirmation and payment
              </button>
            </Link>
        
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
