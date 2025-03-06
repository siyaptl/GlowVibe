import React, { useState } from 'react';
import Header from '../../components/cmpheader';
import Pageupper from '../../components/cmppageupper';
import { beautyProductsrow } from '../../config/staticdata';
import Productcard from '../../components/productcard';
import Footer from '../../components/cmpfooter';

function Shopall() {
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(beautyProductsrow.length / itemsPerPage);

  // Sorting logic
  const sortedProducts = [...beautyProductsrow].sort((a, b) => {
    switch (sortOrder) {
      case "popularity":
        return b.popularity - a.popularity;
      case "rating":
        return b.rating - a.rating;
      case "latest":
        return new Date(b.date) - new Date(a.date);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });  // Only scroll once
    }
  };  

  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <Header />
      <hr />
      <Pageupper infoupper="Home / Shop" infolower="Shop" />

      <div className="flex flex-col md:flex-row justify-between items-left mx-4 md:mx-12 lg:mx-24 gap-7 mb-5">
      {(startIndex + 1) !== (Math.min(startIndex + itemsPerPage, beautyProductsrow.length)) && (
            <p className="text-gray-600 text-sm md:text-base mt-2 tracking-widest text-left md:text-left">
              Showing {startIndex + 1}-{Math.min(endIndex, beautyProductsrow.length)} of {beautyProductsrow.length} results
            </p>
            )}

            <select
              className="border border-dotted bg-white border-gray-300 py-2 px-4 md:py-3 md:px-5 pr-11 tracking-widest text-gray-600 text-sm md:text-base"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="latest">Sort by latest</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
            </select>
          </div>

      <div className="w-screen bg-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 gap-y-11 p-4 lg:mb-16">
  {paginatedProducts.map((product) => (
    <Productcard
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      discountPrice={product.discountPrice}
      innerimage1={product.innerimage1}
      innerimage2={product.innerimage2}
      innerimage3={product.innerimage3}
      innerimage4={product.innerimage4}
      rating={product.rating}
      category={product.category}
      description={product.description}
    />
  ))}
</div>

      {/* Pagination Section */}
      <div className="flex items-center justify-left space-x-1 mb-24 lg:pl-24 md:pl-4 md:pt-11 pl-5 pt-5">
        {/* Previous Button (Hidden on Page 1) */}
        {currentPage > 1 && (
          <button
            className="w-10 h-10 border flex items-center justify-center"
            onClick={() => {handlePageChange(currentPage - 1)
            }}
          >
            ←
          </button>
        )}

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`w-10 h-10 border flex items-center justify-center ${
                currentPage === page ? "bg-black text-white" : ""
              }`}
              onClick={() => {handlePageChange(page)
              }}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button (Hidden on Last Page) */}
        {currentPage < totalPages && (
          <button
            className="w-10 h-10 border flex items-center justify-center"
            onClick={() => {handlePageChange(currentPage + 1)
            }}
          >
            →
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Shopall;
