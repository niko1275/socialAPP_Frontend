import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  // Function to get a subset of visible pages
  const getVisiblePages = () => {
    const visiblePageCount = 5; // You can adjust this value as needed
    const halfVisiblePages = Math.floor(visiblePageCount / 2);

    if (currentPage <= halfVisiblePages + 1) {
      return pages.slice(0, visiblePageCount);
    } else if (currentPage >= pages.length - halfVisiblePages) {
      return pages.slice(pages.length - visiblePageCount);
    } else {
      return pages.slice(
        currentPage - halfVisiblePages - 1,
        currentPage + halfVisiblePages
      );
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center mb-10 ">
      {visiblePages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 font-semibold text-base m-1 border border-black cursor-pointer transition-all duration-300 ${
            page === currentPage ? "bg-sky-400 text-black" : "text-black"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;