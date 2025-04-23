"use client";

import AuthForm from "../templates/authForm/AuthForm";
import HeaderNavbar from "../module/navbar/HeaderNavbar";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { getRefreshToken } from "@/core/lib/token";
import SearchModal from "../templates/search/SearchModal";
import DropDownAccount from "../module/authForm/DropDownAccount";



const Header = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [step, setStep] = useState(1);
  const token = getRefreshToken();

  return (
    <div className="w-full">
      <div className="bg-transparent dark:text-white  navbar flex justify-between items-center md:w-[calc(100%-8rem)] w-[calc(100%-2rem)]  h-[64px] md:h-[115px] mx-auto ">
        <HeaderNavbar />

        <div className="flex items-center justify-between gap-[8px]">
          <div
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex bg-[#E5F2E9] w-[40px] h-[40px] hover:bg-[#417F56]  transition md:justify-center md:items-center rounded cursor-pointer"
          >
            <CiSearch className="text-[#417F56]  w-[24px] h-[24px] p-8px m-auto hover:text-white" />
          </div>
          <div className=" flex bg-[#E5F2E9]  md:w-[40px] md:h-[40px] w-[30] h-[30] justify-center items-center rounded cursor-pointer">
            <Image
              src="/icons/shopping-cart.png"
              alt="shopping-card"
              width={20}
              height={20}
            />
          </div>
          <div className="btn bg-[#E5F2E9] text-[#417F56]   transition md:w-[80px] w-[60px] md:h-[40px] h-[30px] text-[12px] text-center ">
            {token ? (
              <DropDownAccount/>
            ) : (
              <button
                className="hover:text-white"
                onClick={() => setIsAuthOpen(true)}
              >
                {" "}
                login
              </button>
            )}
          </div>
        </div>
      </div>
      {isAuthOpen && (
        <AuthForm
          isOpen={isAuthOpen}
          setIsOpen={setIsAuthOpen}
          step={step}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default Header;
