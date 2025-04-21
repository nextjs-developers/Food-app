"use client";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import ModalContainer from "../container/ModalContainer";
import { useState } from "react";
import ImageSlider from "../module/slider/ImageSlider";
function Branches() {
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const branches = [
    {
      id: 1,
      title: "Vanak",
      address: "No. 26, corner of Niloufar Alley, Ferdowsi St., Vanak Square",
      img: [
        "/images/branches-card/vanak.webp",
        "/images/branches-card/aghdasiye.webp",
        "/images/branches-card/vanak.webp",
        "/images/branches-card/vanak.webp",
      ],
    },
    {
      id: 2,
      title: "Aghdasiye",
      address: "Aghdasiyeh Street, before reaching Khayyam Square, No. 8",
      img: [
        "/images/branches-card/aghdasiye.webp",
        "/images/branches-card/vanak.webp",
        "/images/branches-card/vanak.webp",
        "/images/branches-card/vanak.webp",
      ],
    },
    {
      id: 3,
      title: "Chalus",
      address:
        "Chalus, 17th Shahrivar Street, after Kourosh Alley, next to Dr. Milani Pharmacy",
      img: [
        "/images/branches-card/chalus.webp",
        "/images/branches-card/aghdasiye.webp",
        "/images/branches-card/vanak.webp",
        "/images/branches-card/vanak.webp",
      ],
    },
    {
      id: 4,
      title: "Ekbatan",
      address: "Ekbatan Town, Phase 3, Kourosh Commercial Complex, 3rd Floor",
      img: [
        "/images/branches-card/chalus.webp",
        "/images/branches-card/aghdasiye.webp",
        "/images/branches-card/vanak.webp",
        "/images/branches-card/vanak.webp",
      ],
    },
  ];
  const showImageHandler = (images) => {
    setIsOpenImage(true);
    setSelectedImage(images);
  };
  return (
    <div className="my-16">
      <h4 className="text-[24px] font-bold text-center leading-[140%] mx-auto my-10 ">
        Mehmoni Branches
      </h4>
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-10 justify-center">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="w-[300px] max-h-[600px] border border-[#cbcbcb] rounded-[8px] cursor-pointer shadow-accent-content relative overflow-hidden group hover:border-[#353535] hover:shadow-accent hover:min-h-56 hover:-mb-8 transition-all"
          >
            <figure
              className="relative cursor-pointer"
              onClick={() => showImageHandler(branch.img)}
            >
              <Image
                src={branch.img[0]}
                width={300}
                height={230}
                alt={branch.title}
                className="hover:opacity-50 hover:bg-[#71717175] hover:brightness-50"
              />
              <div className="absolute  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500">
                <div className="tooltip" data-tip="view more">
                  <CiImageOn className="text-6xl text-white bg-[#3c3b3b9e] p-3 rounded-full cursor-pointer hover:bg-[#717171cc] " />
                </div>
              </div>
            </figure>
            <div className="p-4">
              <h5 className="font-[600] text-[20px] text-center leading-9">
                {branch.title}
              </h5>
              <p className="text-center text-[14px] text-[#717171]">
                {branch.address}
              </p>
            </div>
            <button className="absolute cursor-pointer flex items-center align-middle gap-[2px] -bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-[14px] mb-2 px-2 py-1 rounded-md transition-all duration-300 group-hover:bottom-1 hover:bg-gray-200 group-hover:border-gray-200 group-hover:border focus:outline-none">
              Branch page <FaAngleRight className="text-[10px]" />
            </button>
          </div>
        ))}
      </div>
      {isOpenImage && (
        <ModalContainer isOpen={isOpenImage}>
          <ImageSlider selectedImage={selectedImage} setIsOpen={setIsOpenImage} />
        </ModalContainer>
      )}
    </div>
  );
}

export default Branches;
