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
      <div className="flex flex-col items-start w-100% mx-6 lg:w-[calc(100%-64)] lg:flex-row lg:items-center lg:mx-16">
        <SortMenu
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
        <SearchInput search={searchQuery} />
      </div>
      <div className="w-[calc(100%-3rem)] mx-auto mt-8 mb-6 lg:w-[calc(100%-9rem)]">
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
