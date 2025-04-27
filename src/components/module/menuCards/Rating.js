"use client"

import { useState } from "react";

function Rating({ initialValue = 0, onChange }) {
  const [value, setValue] = useState(initialValue);

  const totalStars = 5;

  const handleClick = (index) => {
    setValue(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          onClick={() => handleClick(index + 1)}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform ${
            index < value ? "fill-[#F4B740]" : "fill-[#EDEDED]"
          }`}
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431L24 9.587l-6 5.848 1.416 8.253L12 18.897l-7.416 4.791L6 15.435 0 9.587l8.332-1.569L12 .587z" />
        </svg>
      ))}
    </div>
  );
}

export default Rating;
