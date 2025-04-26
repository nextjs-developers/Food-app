import Link from "next/link";

import { LuUserRound } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";
function DropDownAccount() {
  return (
    <div className="dropdown left-0  dropdown-center">
      <div tabIndex={0} className="flex justify-center items-center ">
        <LuUserRound className="md:text-[20px] text-[16px]" />
        <MdKeyboardArrowDown className="text-[20px] hidden md:block" />
      </div>
      <ul
        tabIndex={0}
        className="top-[100%] mb-[0.25rem]  divide-y md:space-y-2 space-y-1 md:mt-3 mt-1 z-[1] md:p-2 p-0.5 menu menu-sm dropdown-content bg-base-100 rounded-box md:w-36 w-24"
      >
        <li>
          <Link href="/profile" className="text-[10px] md:text-[14px]">
            <LuUserRound className="md:text-[12px]" />
            Profile
          </Link>
        </li>
        <li>
          <Link href="/order-tracking" className="text-[8px] md:text-[13px]">
            <TfiWallet className="md:text-[12px]" />
            Order Tracking
          </Link>
        </li>
        <li>
          <Link href="/favarite" className="text-[10px] md:text-[14px]">
            <FaRegHeart className="md:text-[12px]" />
            Favarite
          </Link>
        </li>
        <li>
          <Link href="/my-address" className="text-[8px] md:text-[14px]">
            <GrLocation className="md:text-[12px]" />
            My Address
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[10px] md:text-[14px]">
            <HiOutlineLogout className="md:text-[12px]" />
            LogOut
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDownAccount;
