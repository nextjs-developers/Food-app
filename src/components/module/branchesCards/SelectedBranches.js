import { RxCross2 } from "react-icons/rx";
import { branches } from "src/constant/branches";
import Image from "next/image";

function SelectedBranches({ setIsOpenBranches, selectedmenu }) {
  const closeModal = () => {
    setIsOpenBranches(false);
  };
  return (
    <div className="relative bg-white md:w-[808px] md:h-[440px] w-[500px] h-[250px]">
      <button
        onClick={closeModal}
        className="text-black absolute top-[15px] left-[15px] "
      >
        <RxCross2 className="text-2xl" />
      </button>
      <div className="flex flex-col justify-center items-center my-6">
        <h3 className="text-[20px] font-semibold text-[#353535] leading-8 my-[10px]">
          Branches Selection
        </h3>
        <h5 className="text-[16px] font-normal">
          To view the restaurant menu, please select the branch you are
          interested in:
        </h5>
      </div>
<div className="flex justify-center gap-5 ">
      {branches.map((branch) => (
          <div key={branch.id}>
          <div className="md:w-[175px] md:h-[260px] border border-[#cbcbcb] rounded-[8px] cursor-pointer shadow-accent-content relative overflow-hidden group hover:border-[#353535] hover:shadow-accent transition-all">
            <figure className="relative cursor-pointer">
              <Image
                src={branch.img[0]}
                width={175}
                height={179}
                alt={branch.title}
                className="hover:opacity-50 "
                />
            </figure>
            <div className="p-4">
              <h5 className="font-semibold text-[16px] text-center leading-9">
                {branch.title}
              </h5>
              <p className="text-center text-[12px] text-[#717171]">
                {branch.address}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      </div>
    </div>
  );
}

export default SelectedBranches;
