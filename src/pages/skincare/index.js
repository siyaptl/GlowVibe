import React from 'react'
import Header from '../../components/cmpheader'
import Pageupper from '../../components/cmppageupper'
import { useState } from 'react';

function Skincare() {
    const [sortOrder, setSortOrder] = useState("default");
  
  return (
    <div>
      <Header />
      <hr></hr>
      <Pageupper infoupper="Home / Skin Care" infolower="Skin Care" />

      {/* Sorting Dropdown */}
      <div className="flex justify-between  mx-24">
      <p className="text-gray-600 mt-2 tracking-widest">Showing all 4 results</p>

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
    </div>
  )
}

export default Skincare
