"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchInput({ initialValue= "", setIsOpen }) {
  const router = useRouter();
  const [search,setSearch] = useState(initialValue)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(`/result?search=${encodeURIComponent(search)}`);
      if(setIsOpen) setIsOpen(false)
    }
  };

  return (
    <div className="flex items-center justify-center">
      <label className="input">
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          required
          placeholder="Search"
        />
      </label>
    </div>
  );
}

export default SearchInput;
