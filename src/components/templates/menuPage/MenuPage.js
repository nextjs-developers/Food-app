"use client";

import { useState } from "react";
import Image from "next/image";
import Rating from "@/components/module/menuCards/Rating";
import MenuCard from "@/components/module/menuCards/MenuCard";

function MenuList({ paginatedMenu }) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <ul className="w-[calc(100%-3rem)] mx-auto grid grid-cols-1 gap-6 mb-12 lg:grid-cols-2 lg:w-[calc(100%-9rem)]">
        {paginatedMenu.map((item) => (
          <li key={item.id}>
            <MenuCard item={item} onClick={() => handleOpenModal(item)} />
          </li>
        ))}
      </ul>

      {open && selectedItem && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box px-0 py-3 w-[808px] h-fit">
            <form
              method="dialog"
              className="flex justify-center items-center mb-3"
            >
              <h2 className="text-xl font-semibold text-[#353535]">
                Product Information
              </h2>
              <button
                type="button"
                className="text-[#717171] font-bold absolute right-5 top-3"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </form>
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              width={800}
              height={400}
            />
            <div className="flex justify-between items-center mt-2 px-2">
              <div>
                <h1 className="text-base font-bold text-[#353535]">
                  {selectedItem.title}
                </h1>
                <p className="text-sm text-[#353535]">
                  {selectedItem.ingredients}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <Rating
                  initialValue={selectedItem.rate}
                  onChange={(newRating) =>
                    setSelectedItem((prev) => ({ ...prev, rate: newRating }))
                  }
                />
                <p className="text-sm text-[#CBCBCB]">(75 Comments)</p>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default MenuList;
