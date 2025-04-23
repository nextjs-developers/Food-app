import { CiImageOn } from "react-icons/ci";
import { FaAngleRight, FaExpand } from "react-icons/fa6";
import Image from "next/image";
function BranchesCard({ branch, showImageHandler }) {
  return (
    <div className="w-[380px] h-[80px] flex flex-row md:flex-col md:w-[300px] md:h-[380px] border border-[#cbcbcb] rounded-[8px] cursor-pointer shadow-accent-content relative overflow-hidden group hover:border-[#353535] hover:shadow-accent md:hover:min-h-56  md:hover:-mb-8 transition-all">
      <figure
        className="relative cursor-pointer"
        onClick={() => showImageHandler(branch.img)}
      >
        <Image
          src={branch.img[0]}
          width={300}
          height={230}
          alt={branch.title}
          className="w-[144px] h-[80px] md:w-[300px] md:h-[230px]"
        />
        <div className="hidden absolute  inset-0 md:flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500">
          <div>
            <CiImageOn className="text-6xl text-white bg-[#3c3b3b9e] p-3 rounded-full cursor-pointer hover:bg-[#717171cc] " />
          </div>
        </div>
        <div className=" md:hidden absolute flex items-center left-[4px] bottom-[4px] ">
          <div className="tooltip" data-tip="view more">
            <FaExpand className="text-xl text-white  cursor-pointer  " />
          </div>
        </div>
      </figure>
      <div className="md:p-4 pb-[10px]">
        <h5 className="font-[600] md:text-[20px] text-[16px] text-center leading-9">
          {branch.title}
        </h5>
        <p className="text-center md:text-[14px] text-[12px] text-[#717171]">
          {branch.address}
        </p>
      </div>
      <button className="hidden absolute cursor-pointer md:flex items-center align-middle gap-[2px] -bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-[14px] mb-2 px-2 py-1 rounded-md transition-all duration-300 group-hover:bottom-1 hover:bg-gray-200 group-hover:border-gray-200 group-hover:border focus:outline-none">
        Branch page <FaAngleRight className="text-[10px]" />
      </button>
    </div>
  );
}

export default BranchesCard;
