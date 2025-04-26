"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiHome5Line } from "react-icons/ri";
import { LuNotepadText } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiHomeGearLine } from "react-icons/ri";
import { usePathname } from "next/navigation";




function HeaderNavbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
const pathName = usePathname();
  const handleToggle = (menuName, e) => {
    e.preventDefault();
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu */}

      <div className="relative md:hidden block">
        <button
          onClick={toggleMenu}
          className="p-4 text-black bg-transparent rounded-md"
        >
          {isOpen ? "×" : "☰"}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-gray-800/15 bg-opacity-75 z-50">
            <div className="flex flex-col  h-full">
          
              <div className="relative w-64 h-full  bg-white  shadow-lg">
              <button
                onClick={toggleMenu}
                className="absolute text-3xl top-4 right-4 text-white"
              >
                ×
              </button>
             <div >
              <Image
              src="/images/menu-mobile.webp"
              width={256}
              height={80}
              alt="mehmoni"
             
              />
              {/* <Image src="/images/mehmoni.png"
              width={67}
              height={30}
              alt="mehmoni"
              className="absolute top-[20%] left-[10px]"/> */}
             </div>
                <ul className="mt-4 divide-y-[1px] p-2 space-y-1.5 divide-gray-300">
                  <li className="pb-[5px]">
                    <Link href="/" className={`flex gap-[5px] items-center ${pathName === "/" ? "text-success" : null}`}>
                    <RiHome5Line className="text-[1rem]"/>HomePage
                    </Link>
                  </li>
                  <li className="pb-[5px]">
                    <details open={activeMenu === "mobile-menu"}>
                      <summary onClick={(e) => handleToggle("mobile-menu", e)} className="flex  items-center justify-between">
                     <div className="flex  items-center gap-[5px]"><LuNotepadText/>   Menu </div> <MdKeyboardArrowDown/>
                      </summary>
                      <ul className=" z-[30] w-[80%] space-y-1 divide-y divide-gray-300 border-none! rounded-none">
                        <li>
                          <Link href="/maindish"  className={` ${pathName === "/maindish" ? "text-success" : null}`}>Main Dish</Link>
                        </li>
                        <li>
                          <Link href="/appertizer" className={`${pathName === "/appertizer" ? "text-success" : null}`}>Appetizer</Link>
                        </li>
                        <li>
                          <Link href="/dessert" className={` ${pathName === "/dessert" ? "text-success" : null}`}>Dessert</Link>
                        </li>
                        <li>
                          <Link href="/drink" className={` ${pathName === "/drink" ? "text-success" : null}`}>Drink</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li className="pb-[5px]">
                    <details open={activeMenu === "mobile-branch"}>
                      <summary
                        onClick={(e) => handleToggle("mobile-branch", e)} className="flex  items-center justify-between"
                      >
                       <div className="flex  items-center gap-[5px]"><RiHomeGearLine/>   Branches </div> <MdKeyboardArrowDown/>
                      </summary>
                      <ul className="p-2 w-[80%] space-y-1 divide-y divide-gray-300 bg-base-100 text-base-content rounded-t-none">
                        <li>
                          <Link href="/ekbatan" className={` ${pathName === "/ekbatan" ? "text-success" : null}`}>Ekbatan</Link>
                        </li>
                        <li >
                          <Link href="/chalus" className={` ${pathName === "/chalus" ? "text-success" : null}`}>Chalus</Link>
                        </li>
                        <li> 
                          <Link href="/Aghdasiye" className={` ${pathName === "/Aghdasiye" ? "text-success" : null}`}>Aghdasiye</Link>
                        </li>
                        <li>
                          <Link href="/vanak" className={`${pathName === "/vanak" ? "text-success" : null}`}>Vanak</Link>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <li className="pb-[5px]">
                    <Link href="/representation" className={`flex gap-[5px] items-center ${pathName === "/representation" ? "text-success" : null}`}><AiOutlineSafetyCertificate className="text-[1rem]"/>Representation Failure</Link>
                  </li>
                  <li className="pb-[5px]">
                    <Link href="/aboutus" className={`flex gap-[5px] items-center ${pathName === "/aboutus" ? "text-success" : null}`}><HiOutlineUsers className="text-[1rem]"/> About Us</Link>
                  </li>
                  <li className="pb-[5px]">
                    <Link href="/contactus" className={`flex gap-[5px] items-center ${pathName === "/contactus" ? "text-success" : null}`}><TbPhoneCall  className="text-[1rem]"/>Contact Us</Link>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

    

      <div>
        <Image
          src="/images/mehmoni-mobile.png"
          alt="mehmoni-logo"
          width={60}
          height={30}
          className="my-10px flex justify-center align-center m-auto md:w-[80px] md:h-[60px]"
        />
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden md:flex md:-flex-1">
        <ul className="menu menu-horizontal">
          <li className="hover:border-b hover:border-[#417F56] hover:bg-transparent!">
            <Link href="/contactus" className={`${pathName === "/contactus" ? "text-success" : null}`}>Contact Us</Link>
          </li>
          <li className="hover:border-b hover:border-[#417F56]">
            <Link href="/aboutus" className={`${pathName === "/aboutus" ? "text-success" : null}`}>About Us</Link>
          </li>
          <li className="hover:border-b hover:border-[#417F56]">
            <Link href="/representation" className={`${pathName === "/representation" ? "text-success" : null}`}>Representation Failure</Link>
          </li>

        
          <li>
            <details open={activeMenu === "desktop-menu"}>
              <summary
                className=" z-[30] focus:bg-transparent hover:border-b hover:border-[#417F56] hover:text-[#417F56] hover:bg-[color-mix(in_oklab,var(--color-base-content)_10%,transparent)] hover: bg-opacity-10 transition"
                onClick={(e) => handleToggle("desktop-menu", e)}
              >
                Menu
              </summary>
              <ul className="p-2 z-[30] w-[144px] divide-y divide-gray-300 bg-base-100 text-base-content rounded-t-none">
                <li >
                  <Link href="/maindish" className={`${pathName === "/maindish" ? "text-success" : null}`}>Main Dish</Link>
                </li>
                <li >
                  <Link href="/appetizer" className={`${pathName === "/appetizer" ? "text-success" : null}`}>Appetizer</Link>
                </li>
                <li>
                  <Link href="/dessert"  className={`${pathName === "/dessert" ? "text-success" : null}`}>Dessert</Link>
                </li>
                <li >
                  <Link href="/drink" className={`${pathName === "/drink" ? "text-success" : null}`}>drink</Link>
                </li>
              </ul>
            </details>
          </li>

          {/* Desktop Branch */}
          <li>
            <details open={activeMenu === "desktop-branch"}>
              <summary
                className=" hover:bg-[color-mix(in_oklab,var(--color-base-content)_10%,transparent)] hover: bg-opacity-10 z-[30] focus:bg-transparent hover:border-b hover:border-[#417F56] hover:text-[#417F56] transition"
                onClick={(e) => handleToggle("desktop-branch", e)}
              >
                Branch
              </summary>
              <ul className="p-2 z-[30] w-[144px] divide-y divide-gray-300 bg-base-100 text-base-content rounded-t-none">
                <li>
                  <Link href="/ekbatan"  className={`${pathName === "/ekbatan" ? "text-success" : null}`}>Ekbatan</Link>
                </li>
                <li >
                  <Link href="/chalus" className={`${pathName === "/chalus" ? "text-success" : null}`}>Chalus</Link>
                </li>
                <li >
                  <Link href="/Aghdasiye" className={`${pathName === "/Aghdasiye" ? "text-success" : null}`}>Aghdasiye</Link>
                </li>
                <li >
                  <Link href="/vanak" className={`${pathName === "/vanak" ? "text-success" : null}`}>Vanak</Link>
                </li>
              </ul>
            </details>
          </li>

          <li className="hover:border-b hover:border-[#417F56]">
            <Link href="/" className={`${pathName === "/" ? "text-success" : null}`}>HomePage</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HeaderNavbar;
