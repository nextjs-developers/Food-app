import Image from "next/image"

function Advantages() {
  return (
    <div className="flex flex-col items-center my-12">
        <h3 className="text-2xl font-bold text-[#353535]">
          Advantages of Franchise Ownership
        </h3>
        <div className="grid grid-cols-2 gap-y-3 my-10">
          <p className="flex items-center gap-1">
            <Image
              src="/icons/rectangle.png"
              alt="list"
              width={16}
              height={16}
            />
            <span className="text-xl text-[#353535]">
              Leveraging the Well-known Mehmooni Brand
            </span>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/icons/rectangle.png"
              alt="list"
              width={16}
              height={16}
            />
            <span className="text-xl text-[#353535]">
              Consultation in Legal, Financial, and Tax Matters
            </span>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/icons/rectangle.png"
              alt="list"
              width={16}
              height={16}
            />
            <span className="text-xl text-[#353535]">
              Minimizing Investment Risk
            </span>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/icons/rectangle.png"
              alt="list"
              width={16}
              height={16}
            />
            <span className="text-xl text-[#353535]">
              Marketing and Human Resources Support
            </span>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/icons/rectangle.png"
              alt="list"
              width={16}
              height={16}
            />
            <span className="text-xl text-[#353535]">
              Accelerating the Return on Investment
            </span>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/icons/rectangle.png"
              alt="list"
              width={16}
              height={16}
            />
            <span className="text-xl text-[#353535]">
              Consultation for Sourcing Raw Materials and Equipment
            </span>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/icons/rectangle.png"
              alt="list"
              width={16}
              height={16}
            />
            <span className="text-xl text-[#353535]">
              Specialized Consulting for Restaurant Management
            </span>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/icons/rectangle.png"
              alt="list"
              width={16}
              height={16}
            />
            <span className="text-xl text-[#353535]">
              Sales Promotion and Incentive Programs
            </span>
          </p>
        </div>
      </div>
  )
}

export default Advantages
