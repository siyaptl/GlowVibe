import React, { useState } from 'react';
import Header from '../../components/cmpheader';
import Pageupper from '../../components/cmppageupper';
import { beautyProductsrow } from '../../config/staticdata';
import Productcard from '../../components/productcard';
import Footer from '../../components/cmpfooter';

function Shopall() {
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const filteredProducts = beautyProductsrow.filter(product => product.category === "Skin care");
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "popularity":
      case "rating":
        return b.rating - a.rating;
      case "latest":
        return b.id - a.id;
      case "price-low":
        return a.discountPrice - b.discountPrice;
      case "price-high":
        return b.discountPrice - a.discountPrice;
      default:
        return 0;
    }
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Header />
      <hr />
      <Pageupper infoupper="Home / Skin care" infolower="Skin Care" />

      <div className="flex flex-col md:flex-row justify-between items-left mx-4 md:mx-12 lg:mx-24 gap-7 mb-5">
      {(startIndex + 1) !== (Math.min(startIndex + itemsPerPage, filteredProducts.length)) && (
      <p className="text-gray-600 text-sm md:text-base mt-2 tracking-widest text-left md:text-left">
        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} results
      </p>
    )}
    {(startIndex + 1) === (Math.min(startIndex + itemsPerPage, filteredProducts.length)) && (
      <p className="text-gray-600 text-sm md:text-base mt-2 tracking-widest text-left md:text-left">
        Showing {startIndex + 1} of {filteredProducts.length} results
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

      <div className="w-[100%] bg-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 gap-y-11 p-4 lg:mb-16">
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
        {currentPage > 1 && (
          <button
            className="w-10 h-10 border flex items-center justify-center"
            onClick={() => {setCurrentPage(currentPage - 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ←
          </button>
        )}

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`w-10 h-10 border flex items-center justify-center ${
                currentPage === page ? "bg-black text-white" : ""
              }`}
              onClick={() => {setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {page}
            </button>
          );
        })}

        {currentPage < totalPages && (
          <button
            className="w-10 h-10 border flex items-center justify-center"
            onClick={() => {setCurrentPage(currentPage + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
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
