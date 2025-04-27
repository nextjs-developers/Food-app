import MenuCard from "@/components/module/menuCards/MenuCard";
import MenuCategory from "@/components/module/menuCards/MenuCategory";
import Pagination from "@/components/module/menuCards/Pagination";
import SearchInput from "@/components/module/menuCards/SearchInput";
import SortMenu from "@/components/module/menuCards/SortMenu";
import Slider from "@/components/module/slider/Slider";
import MenuPage from "@/components/templates/menuPage/MenuPage";
import Image from "next/image";
import { branchesMenu } from "src/constant/branchesMenu";

function Menu({ searchParams }) {
  const categories = ["all", "mainCourse", "appetizers", "desserts", "drinks"];
  const selectedCategory = searchParams.category || "all";
  const filterType = searchParams.filter || null;
  const searchQuery = searchParams.search || "";
  const currentPage = +searchParams.page || 1;
  const perPage = 10;

  const filteredMenu = branchesMenu
    .filter((item) => {
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchSearch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      if (filterType === "popular") return b.rate - a.rate;
      if (filterType === "affordable")
        return a.priceAfterDiscount - b.priceAfterDiscount;
      return 0;
    });

  const totalItems = filteredMenu.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const paginatedMenu = filteredMenu.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div>
      <Slider />
      <MenuCategory
        categories={categories}
        selectedCategory={selectedCategory}
      />
      <div className="flex items-center justify-between w-[calc(100%-9rem)] mx-auto">
        <SortMenu
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
        <SearchInput search={searchQuery} />
      </div>
      <div className="w-[calc(100%-9rem)] mx-auto mt-8 mb-6">
        <button className="border border-[#417F56] pt-2 pb-2 pr-4 pl-4 rounded-sm flex gap-2 text-[#417F56] cursor-pointer font-medium">
          <Image
            src="/icons/shopping-cart.png"
            alt="shopping-card"
            width={20}
            height={20}
          />
          <span>Complete the Purchase</span>
        </button>
      </div>
      {/* <ul className="w-[calc(100%-9rem)] mx-auto grid grid-cols-2 gap-6 mb-12">
        {paginatedMenu.map((item) => (
          <li key={item.id}>
            <MenuCard item={item} />
          </li>
        ))}
      </ul> */}
      <MenuPage paginatedMenu={paginatedMenu} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        category={selectedCategory}
        filter={filterType}
        search={searchQuery}
      />
    </div>
  );
}

export default Menu;
