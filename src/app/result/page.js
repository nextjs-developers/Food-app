import SearchInput from "@/components/module/search/SearchInput";
import BranchMenuCard from "@/components/templates/branchPage/BranchMenuCard";
import Image from "next/image";
import { branchesMenu } from "src/constant/branchesMenu";

function Result({ searchParams }) {
  const searchQuery = searchParams.search?.toLowerCase() || "";

  const filtered = branchesMenu.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="min-h-screen items-center justify-center py-10 px-4 text-center  space-y-6">
      {filtered.length && searchQuery ? (
        <>
          <h2 className="font-bold text-2xl">
            Search results for:{" "}
            <span className="text-[#417F56]">{searchQuery}</span>
          </h2>
          <SearchInput initialValue={searchQuery} />
          <ul className="flex justify-center items-center gap-4 flex-wrap mt-12">
            {filtered.map((item) => (
              <li key={item.id}>
                <BranchMenuCard data={item} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="text-lg sm:text-xl font-semibold text-[#353535]">
            No item with these specifications was found!
          </h2>
          <SearchInput initialValue={searchQuery} />
          <Image
            src="/images/notFound.png"
            alt="not found"
            width={300}
            height={300}
            className="mx-auto w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-contain mt-10"
          />
        </>
      )}
    </div>
  );
}

export default Result;
