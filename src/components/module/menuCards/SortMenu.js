import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

function SortMenu({searchQuery, selectedCategory}) {
  return (
    <div>
      <ul className="flex gap-1">
        <div className="flex items-center text-[#353535] bg-[#EDEDED] w-fit rounded-4xl pr-2 pl-2 cursor-pointer">
          <Link
            className="flex items-center"
            href={`?${
              selectedCategory !== "all" ? `category=${selectedCategory}` : ""
            }&filter=popular${searchQuery ? `&search=${searchQuery}` : ""}`}
          >
            <li>Most Popular Dishes</li>
            <MdKeyboardArrowRight />
          </Link>
        </div>
        <div className="flex items-center text-[#353535] bg-[#EDEDED] w-fit rounded-4xl pr-2 pl-2 cursor-pointer">
          <Link
            className="flex items-center"
            href={`?${
              selectedCategory !== "all" ? `category=${selectedCategory}` : ""
            }&filter=affordable${searchQuery ? `&search=${searchQuery}` : ""}`}
          >
            <li>Most Affordable Meals</li>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default SortMenu;
