import Link from "next/link";

function MenuCategory({categories, selectedCategory}) {
  return (
    <div className="bg-[#EDEDED] mb-4">
      <ul className="h-8 flex gap-4 items-center w-full pr-2 mx-6 lg:mx-16 lg:gap-8">
        {categories.map((item) => (
          <li
            key={item}
            className={`cursor-pointer text-sm lg:text-xl ${
              selectedCategory === item
                ? `text-[#417F56] border-b-2 border-[#417F56] font-bold p-0.5`
                : `text-[#717171] font-normal`
            }`}
          >
            <Link href={`?category=${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuCategory;
