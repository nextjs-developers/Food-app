import Link from "next/link";

function MenuCategory({categories, selectedCategory, generateURL}) {
  return (
    <div className="bg-[#EDEDED] mb-4">
      <ul className="h-8 flex gap-8 items-center w-[calc(100%-9rem)] mx-auto">
        {categories.map((item) => (
          <li
            key={item}
            className={`cursor-pointer text-xl ${
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
