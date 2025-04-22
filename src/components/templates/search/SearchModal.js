import SearchInput from "@/components/module/search/SearchInput";
import { useEffect, useRef } from "react";

function SearchModal({ isOpen, setIsOpen }) {
  const dialogRef = useRef();

  useEffect(() => {
    isOpen ? dialogRef.current?.showModal() : dialogRef.current?.close();
  }, [isOpen]);
  return (
    <div>
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box h-[220] p-0">
          <form method="dialog" className="bg-[#ededed] py-[20]">
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-circle btn-ghost text-[#717171] absolute right-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-xl text-[#353535] text-center">
              Search
            </h3>
          </form>
          <p className="pt-8 pb-3 text-base text-center">
            Please enter your text and press enter.
          </p>
          <SearchInput />
        </div>
      </dialog>
    </div>
  );
}

export default SearchModal;
