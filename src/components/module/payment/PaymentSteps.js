import Link from 'next/link';
import { FaRegSquareCheck } from 'react-icons/fa6';
import { LuWallet } from 'react-icons/lu';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { IoIosArrowBack } from "react-icons/io";


function PaymentSteps() {
  return (
    <>
    <div className='flex md:hidden justify-center items-center gap-[50px]'>
    <span><IoIosArrowBack /></span>
<h5 className='body-md font-bold text-[#353535] dark:text-white text-center'>Completion of information</h5>

    </div>
    <div className="md:flex w-[730px] items-center justify-between mx-auto mb-[30px] hidden  ">
    
    <Link
      href="/shoppingCard"
      className="flex flex-1.2 gap-[2px] text-primary body-sm "
      >
      shopping cart{" "}
      <PiShoppingCartSimpleBold className="w-[20px] h-[20px] text-primary" />{" "}
    </Link>

    <div className="flex-2 border-dashed border-x-0 border-y-1 border-primary h-0"></div>

    <Link
      href="/shoppingCard"
      className=" flex flex-2 text-primary body-sm gap-[2px] "
      >
      Completion Of Information{" "}
      <FaRegSquareCheck className="w-[20px] h-[20px] text-primary" />{" "}
    </Link>

    <div className="flex-2 border-dashed border-x-0 border-y-1 border-primary h-0"></div>

    <Link
      href="/shoppingCard"
      className="flex flex-1 text-primary body-md font-bold gap-[2px] "
      >
      payment <LuWallet className="w-[24px] h-[24px] text-primary" />{" "}
    </Link>
  </div>
      </>
  )
}

export default PaymentSteps
