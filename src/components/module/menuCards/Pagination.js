import Link from "next/link";

function Pagination({ currentPage, totalPages, category, filter, search }) {
  if (totalPages <= 1) return null;
  
  return (
    <div className="flex justify-center items-center gap-4 mb-12">
      {currentPage > 1 && (
        <Link
          href={`?${category ? `category=${category}&` : ""}${
            filter ? `filter=${filter}&` : ""
          }${search ? `search=${search}&` : ""}page=${currentPage - 1}`}
          className="px-4 py-2 bg-[#EDEDED] rounded-md cursor-pointer"
        >
          Previous
        </Link>
      )}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          href={`?${category ? `category=${category}&` : ""}${
            filter ? `filter=${filter}&` : ""
          }${search ? `search=${search}&` : ""}page=${currentPage + 1}`}
          className="px-4 py-2 bg-[#EDEDED] rounded-md cursor-pointer"
        >
          Next
        </Link>
      )}
    </div>
  );
}

export default Pagination;
