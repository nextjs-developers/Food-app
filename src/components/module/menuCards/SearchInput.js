"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function SearchInput({ search }) {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [searchValue,setSearchValue] = useState(search)

  useEffect(() => {
    const debounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      searchValue ? params.set("search", searchValue) : params.delete("search");
      params.set("page", "1");
      router.push(`?${params.toString()}`);
    }, 500);
    return () => clearTimeout(debounce);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, router]);

  return (
    <div className="flex items-center justify-end w-full">
      <label className="input w-full lg:w-[400]">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          required
          placeholder="Search"
        />
      </label>
    </div>
  );
}

export default SearchInput;
