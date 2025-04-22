import SearchInput from "@/components/module/search/SearchInput";
import Image from "next/image";

function Result() {
  return (
    <div className="h-screen items-center justify-center py-10 px-4 text-center  space-y-6">
      <h2 className="text-lg sm:text-xl font-semibold text-[#353535]">
        No item with these specifications was found!
      </h2>
      <SearchInput />
      <Image
        src="/images/notFound.png"
        alt="not found"
        width={300}
        height={300}
        className="mx-auto w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-contain mt-10"
      />
    </div>
  );
}

export default Result;
