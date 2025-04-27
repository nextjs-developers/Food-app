import Image from "next/image"
import Link from "next/link"

function unsuccessfulPage() {
  return (
    <div className="w-full h-full py-[30px] bg-repeat bg-cover flex flex-col justify-center items-center  gap-7">
    <div>
    <Image width={120} height={112} src="/images/unsuccessfulPayment.webp" className='md:w-3xs md:h-[240px] w-[120px] h-[112px]'/>
    </div>
    <p className='robotoBold md:text-[40px] text-error text-[1rem]'> Your payment was unsuccessful!</p>
    <p className='md:text-[1rem] text-gray-dark  text-[12px]'>Your order tracking code: 21549019</p>
    <div className='flex md:gap-8 gap-6'>
      <button className=' text-primary text-[12px] md:text-[1rem] hover:text-primary-dark transition'><Link href="/" className=''>
      Return to the main page</Link></button>
      <button className='btn border border-primary text-primary text-[12px] md:text-[1rem] '><Link href="/">Repayment</Link></button>

    </div>
  </div>
  )
}

export default unsuccessfulPage