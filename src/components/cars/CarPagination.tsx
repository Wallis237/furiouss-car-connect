
interface CarPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CarPagination = ({ currentPage, totalPages, onPageChange }: CarPaginationProps) => {
  // If there are no pages, don't render pagination
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-12">
      <nav className="inline-flex">
        <button 
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-furious-text hover:bg-gray-50 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button 
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium ${
                pageNumber === currentPage ? 'text-furious-red' : 'text-furious-text hover:bg-gray-50'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        
        <button 
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-furious-text hover:bg-gray-50 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default CarPagination;
