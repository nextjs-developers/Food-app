"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Slider = () => {
  const images = [
    {
      src: "/images/image1.webp",
      text: "The Best Experience healthy and vegetarian food in Mehmoni style",
    },
    { src: "/images/image2.webp", text: "The unique taste of nature!" },
    { src: "/images/image3.webp", text: "Experience the best flavors with us" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative w-[100%] m-auto mt-4">
      {/* Slider Container */}
      <div
        className="relative h-96 rounded-0 group  duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image with DaisyUI classes */}
        <div className="relative   w-full h-full rounded-box overflow-hidden">
          <Image
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-500 "
            priority
          />
          <div className="absolute inset-0 bg-gray-600 opacity-50 flex justify-center items-center"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-8">
            <p className=" md:text-[40px] text-[16px] text-[#E5F2E9]">
              {images[currentIndex].text}
            </p>
            <Link href="/menu">
              <button className="btn bg-[#417F56] outLine-none border-none md:w-[184px] md:h-[40px] w-[120px] h-[30px] text-white text-[10px] md:text-[16px] mt-6">
                Order Food Online
              </button>
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="bg-transparent absolute left-0 top-1/2 -translate-y-1/2 h-full rounded-btn hover:bg-opacity-90 mx-1 bg-neutral text-neutral-content p-2 transition-colors duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft
            className="text-base-300 group-hover:text-white"
            size={24}
          />
        </button>
        <button
          onClick={nextSlide}
          className="bg-transparent absolute right-0 top-1/2 -translate-y-1/2 h-full rounded-btn hover:bg-opacity-90 mx-1 bg-neutral text-neutral-content p-2 transition-colors duration-200"
          aria-label="Next slide"
        >
          <ChevronRight
            className="text-base-300 group-hover:text-white"
            size={24}
          />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2 z-[20]    absolute left-1/2 bottom-0 w-[100px] h-[30px] -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[10px] w-[10px] mt-2 rounded-full bg-[url("/icons/rec-2.png")] bg-cover  bg-center  rounded-btn transition-all duration-500 z-[30] ${
              index === currentIndex ? "bg-[#417F56]" : "bg-base-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
