"use client"
import { useState } from "react";
import ModalContainer from "../container/ModalContainer";
import { menu } from "src/constant/Menu";
import Image from "next/image";
import SelectedBranches from "../module/branchesCards/SelectedBranches";

const RestaurantMenu = () => {
const[isOpenBranches , setIsOpenBranches] = useState(false);
const[selectedmenu , setSelectedMenu] = useState(null);

const menuItemHandler =(item)=>{
  setIsOpenBranches(true);
  setSelectedMenu(item);
}

  return (
    <div className="bg-gray-100 pb-10 ">
      <div className="text-center py-10">
        <h2 className="text-3xl font-Robotobold">restaurant menu </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10 justify-center">

{menu.map ((item)=>
(
  <div key={item.id} className="relative text-center " onClick={()=>menuItemHandler(item)}>
  <div className="absolute inset-3 bg-[#417F56] rounded-lg py-10 px-7 bottom-2 top-2/5"></div>
  <div className="relative z-10">
    <Image
      src={item.img}
      alt= {item.title}
      width={item.id===4 ? 240 : 290 }
      height={item.id===4 ? 240 : 290 }
      className="mx-auto rounded-lg "
    />
    <button className="bg-white py-2 px-12 shadow-md mt-2" >
      {item.title}
    </button>
  </div>
</div>
)

)}

{/* 
        <div className="relative text-center ">
          <div className="absolute inset-3 bg-[#417F56] rounded-lg py-10 px-7 bottom-2 top-2/5"></div>
          <div className="relative z-10">
            <img
              src="/images/image (2).svg"
              alt="Main course"
              width={290}
              height={290}
              className="mx-auto rounded-lg "
            />
            <button className="bg-white py-2 px-12 shadow-md mt-2">
              Main course
            </button>
          </div>
        </div> */}

        {/* <div className="relative text-center ">
          <div className="absolute inset-3 bg-[#417F56] rounded-lg py-10 px-7 bottom-2 top-2/5"></div>
          <div className="relative z-10">
            <img
              src="/images/image (1).svg"
              alt="Appetizers"
              width={290}
              height={290}
              className="mx-auto rounded-lg "
            />
            <button className="bg-white py-2 px-12 shadow-md mt-2">
              Appetizers
            </button>
          </div>
        </div> */}

        {/* <div className="relative text-center ">
          <div className="absolute inset-3 bg-[#417F56] rounded-lg py-10 px-7 bottom-2 top-2/5"></div>
          <div className="relative z-10">
            <img
              src="/images/image (3).svg"
              alt="Desserts"
              width={290}
              height={290}
              className="mx-auto rounded-lg "
            />
            <button className="bg-white  py-2 px-12 shadow-md mt-2">
              Desserts
            </button>
          </div>
        </div> */}

        {/* <div className="relative text-center ">
          <div className="absolute inset-3 bg-[#417F56] rounded-lg py-10 px-7 bottom-2 top-2/5"></div>
          <div className="relative z-10">
            <img
              src="/images/image (5).svg"
              alt="Drinks"
              width={240}
              height={240}
              className="mx-auto rounded-lg "
            />
            <button className="bg-white  py-2 px-12 shadow-md mt-2">
              Drinks
            </button>
          </div>
        </div> */}
      </div>
      {isOpenBranches && <ModalContainer isOpen={isOpenBranches}>
        <SelectedBranches setIsOpenBranches={setIsOpenBranches} selectedmenu={selectedmenu}/>
      
        </ModalContainer>} 
    </div>
  );
};

export default RestaurantMenu;
