import Image from "next/image"

function Services() {
  return (
    <div className="flex justify-between items-baseline my-12 w-[925px] mx-auto">
        <div className="w-[181px] flex flex-col items-center gap-4">
          <Image
            src="/icons/recipe.png"
            alt="Recipe"
            width={140}
            height={140}
          />
          <p className="text-lg text-center">
            Sharing Recipes and Preparation Instructions
          </p>
        </div>
        <div className="w-[181px] flex flex-col items-center gap-4">
          <Image src="/icons/plan.png" alt="Plan" width={140} height={140} />
          <p className="text-lg text-center">
            Sales Promotion and Incentive Programs
          </p>
        </div>
        <div className="w-[181px] flex flex-col items-center  gap-4">
          <Image
            src="/icons/facilities.png"
            alt="Facilities"
            width={140}
            height={140}
          />
          <p className="text-lg text-center">
            Restaurant Setup and Equipment Financing
          </p>
        </div>
        <div className="w-[181px] flex flex-col items-center gap-4">
          <Image
            src="/icons/branch.png"
            alt="Branch"
            width={140}
            height={140}
          />
          <p className="text-lg text-center">
            Over 20 Operational Branches Nationwide
          </p>
        </div>
      </div>
  )
}

export default Services
