import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/cmpheader';
import Pageupper from '../../components/cmppageupper';
import { beautyProductsrow } from '../../config/staticdata';
import Productcard from '../../components/productcard';
import Footer from '../../components/cmpfooter';

function Shopall() {
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const pageTopRef = useRef(null); // Reference to scroll to top

  // Scroll to top when page changes
  useEffect(() => {
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div ref={pageTopRef}> {/* Set reference to top of the page */}
      <Header />
      <hr />
      <Pageupper infoupper="Home / Shop" infolower="Shop" />

      <div className="flex justify-between mx-24">
        <p className="text-gray-600 mt-2 tracking-widest">Showing 8 results</p>

        <select
          className="border border-dotted bg-white border-gray-300 py-3 px-5 pr-11 tracking-widest text-gray-600"
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

      <div className="w-screen bg-white grid lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-3 grid-cols-2 gap-4 gap-y-11 p-4 lg:mb-16">
        {beautyProductsrow.map((product) => (
          product.id<=8&&(<Productcard
            id={product.id}
            name={product.name}
            price={product.price}
            discountPrice={product.discountPrice}
            innerimage1= {product.innerimage1}
            innerimage2= {product.innerimage2}
            innerimage3= {product.innerimage3}
            innerimage4= {product.innerimage4}
            rating={product.rating}
            category={product.category}
            description={product.description}
          />)
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-left space-x-1 mb-24 pl-24">
        {/* Previous Button - Hidden on Page 1 */}
        {currentPage > 1 && (
          <button
            className="w-10 h-10 border flex items-center justify-center"
            onClick={() => handlePageChange(currentPage - 1)}
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
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button - Hidden on Last Page */}
        {currentPage < totalPages && (
          <button
            className="w-10 h-10 border flex items-center justify-center"
            onClick={() => handlePageChange(currentPage + 1)}
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
