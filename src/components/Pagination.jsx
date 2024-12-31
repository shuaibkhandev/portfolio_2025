import React from 'react'
import { GrFormPrevious,GrFormNext } from "react-icons/gr";

const Pagination = ({darkMode , onPageChange, totalItems, itemsPerPage, currentPage}) => {
  const totalPages = Math.ceil(totalItems/itemsPerPage);
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };
  console.log("Pagination", darkMode);
  
  return (
//     <div className='pagination flex items-center gap-[10px]'>
// <button className='preview w-[35px] h-[35px] rounded-md bg-[#d1d5db] disabled cursor-not-allowed flex items-center justify-center'><GrFormPrevious/></button>
// <button className=' w-[35px] border-[#1877F2] border-2 h-[35px] rounded-md bg-[#EBF2FA] flex items-center justify-center'>1</button>
// <button className=' w-[35px] h-[35px] rounded-md bg-[#EBF2FA] flex items-center justify-center'>2</button>
// <button className='next w-[35px] h-[35px] rounded-md bg-[#EBF2FA] flex items-center justify-center'><GrFormNext/></button>
//     </div>

<div className="pagination flex items-center gap-[10px]">
{/* Previous Button */}
<button
  className={`preview w-[35px] h-[35px] rounded-md  disabled:cursor-not-allowed flex items-center justify-center ${darkMode ? "bg-dark-gray text-light-gray":"bg-[#d1d5db]"}`}
  disabled={currentPage === 1}
  onClick={() => handlePageChange(currentPage - 1)}
>
  <GrFormPrevious />
</button>

{/* Page Numbers */}
{Array.from({ length: totalPages }, (_, index) => (
  <button
    key={index + 1}
    className={`w-[35px] h-[35px] rounded-md flex items-center justify-center ${
      currentPage === index + 1
        ? `bg-[#1877F2] text-white border-[#1877F2] border-2`
        :` ${darkMode ? "bg-dark-gray text-light-gray":"bg-[#EBF2FA]"}`
    }`}
    onClick={() => handlePageChange(index + 1)}
  >
    {index + 1}

  </button>
))}

{/* Next Button */}
<button
  className="next w-[35px] h-[35px] rounded-md bg-[#d1d5db] disabled:cursor-not-allowed flex items-center justify-center"
  disabled={currentPage === totalPages}
  onClick={() => handlePageChange(currentPage + 1)}
>
  <GrFormNext />
</button>
</div>
  )
}

export default Pagination