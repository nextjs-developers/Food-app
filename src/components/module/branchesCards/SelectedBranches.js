import { RxCross2 } from "react-icons/rx";
import { branches } from "src/constant/branches";
import Image from "next/image";

function SelectedBranches({ setIsOpenBranches, selectedmenu }) {
  const closeModal = () => {
    setIsOpenBranches(false);
  };
  return (
    <div className="relative md:bg-white border border-gray-100 md:w-[808px] md:h-[440px] w-[320px] h-[502px]">
      <button
        onClick={closeModal}
        className="text-black absolute md:top-[15px] md:left-[15px] top-[5px] left-[5px] "
      >
        <RxCross2 className="md:text-2xl text-[15px]" />
      </button>
      <div className="flex flex-col justify-center items-center md:my-6 mb-6 w-full">
        <h3 className="md:text-[20px] text-center text-[14px] font-semibold text-[#353535] w-full bg-gray-300/15 md:bg-transparent leading-8 md:my-[10px]">
          Branches Selection
        </h3>
        <h5 className="md:text-[16px] text-[12px] text-center px-[10px] pt-[10px] font-normal">
          To view the restaurant menu, please select the branch you are
          interested in:
        </h5>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-5 gap-3.5 overflow-y-scroll">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="md:w-[175px] md:h-[260px] w-[288px] h-[80px] flex md:flex-col flex-row  border border-[#cbcbcb] rounded-[8px] cursor-pointer shadow-accent-content relative overflow-hidden group hover:border-[#353535] hover:shadow-accent transition-all"
          >
            <figure className="relative cursor-pointer">
              <Image
                src={branch.img[0]}
                width={175}
                height={179}
                alt={branch.title}
                className="hover:opacity-50 "
              />
            </figure>
            <div className="md:p-4 pb-[10px]">
              <h5 className="font-semibold md:text-[16px] text-[12px]  text-center leading-9">
                {branch.title}
              </h5>
              <p className="text-center md:text-[12px] text-[10px] text-[#717171]">
                {branch.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedBranches;
