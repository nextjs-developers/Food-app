"use client";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import React, { useState } from "react";

function ImageSlider({ selectedImage, setIsOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="  m-auto mt-8">
      <div className=" rounded-0 group duration-300">
        <div className="relative rounded-box flex justify-center align-middle">
          <div className="relative  ">
            <Image
              src={selectedImage[currentIndex]}
              width={808}
              height={440}
              alt={`Slide ${currentIndex + 1}`}
              priority
              className="relative w-[320px] h-[352px] md:w-[808px] md:h-[440px] object-contain transition-opacity duration-500 "
            />
            <button
              onClick={closeModal}
              className="text-white absolute  md:top-[10px] md:left-[150px] top-[60px] left-[10px] "
            >
              <RxCross2 className="md:text-2xl text-[20px]  " />
            </button>
          </div>

          <div className="absolute inset-x-0 md:bottom-0 bottom-[40px]">
            <div className=" carousel flex overflow-x-clip justify-center align-middle bg-transparent carousel-center max-w-full p-4 space-x-4  rounded-box">
              {selectedImage.map((image, index) => (
                <div
                  key={index}
                  className={` carousel-item relative ${
                    currentIndex === index ? "ring-2 ring-[#e1e1e1]" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="rounded-box md:h-24 md:w-24 h-14 w-14 object-cover cursor-pointer"
                    onClick={() => goToImage(index)}
                  />
                  {currentIndex === index && (
                    <div className="absolute inset-0 bg-primary/20 rounded-box"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-white mt-6">
          {currentIndex + 1} / {selectedImage.length}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
