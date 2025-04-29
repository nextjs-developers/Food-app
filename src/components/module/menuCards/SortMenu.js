import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

function SortMenu({searchQuery, selectedCategory}) {
  return (
    <div>
      <ul className="flex gap-2 mb-4 lg:gap-4">
        <div className="flex items-center text-[#353535] bg-[#EDEDED] lg:w-[182] rounded-4xl px-2  cursor-pointer">
          <Link
            className="flex items-center"
            href={`?${
              selectedCategory !== "all" ? `category=${selectedCategory}` : ""
            }&filter=popular${searchQuery ? `&search=${searchQuery}` : ""}`}
          >
            <li className="text-sm lg:text-base">Most Popular Dishes</li>
            <MdKeyboardArrowRight />
          </Link>
        </div>
        <div className="flex items-center text-[#353535] bg-[#EDEDED] lg:w-[182] rounded-4xl px-2 cursor-pointer">
          <Link
            className="flex items-center"
            href={`?${
              selectedCategory !== "all" ? `category=${selectedCategory}` : ""
            }&filter=affordable${searchQuery ? `&search=${searchQuery}` : ""}`}
          >
            <li className="text-sm lg:text-base">Most Affordable Meals</li>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default SortMenu;
