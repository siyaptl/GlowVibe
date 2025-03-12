import React from 'react'
import Header from '../../components/cmpheader'
import img from '../../assets/makeup/p11.jpg'

function Cart() {
  return (
    <div>
      <Header />
      <hr></hr>

      <div className="container w-[87%] mx-auto p-4 mt-11">
      <p className="text-4xl tracking-wide font-serif text-gray-800 mb-5">Cart</p>

      {/* Cart Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-[1px] border-slate-300">
          <thead className="bg-gray-50 text-gray-700 border-b-[1px]">
            <tr className="text-left tracking-wider">
              <th className="p-3"> </th>
              <th className="p-3"> </th>
              <th className="py-3 text-center">Product</th>
              <th className="p-3">Price</th>
              <th className="py-3 pl-7">Quantity</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b h-28">
              <td className="p-3">
              <button className="text-gray-400 border rounded-full border-gray-400 hover:text-gray-500 hover:border-gray-500 ml-7 h-7 w-7 text-2xl flex items-center justify-center">
                    &times;
                  </button>
              </td>
              <td className="p-3 flex items-center">
                <img
                  src={img}
                  alt="Product"
                  className="w-16 h-20 object-cover border rounded"
                />
                </td>
                <td className='text-center'>
                 <span className="py-3 mx-auto tracking-wider">Product Name 15</span>
                                  </td>

              <td className="p-3 text-gray-500 tracking-wider">$59.00</td>
              <td className="p-3">
                <div className="flex items-center border rounded w-fit">
                  <button className="px-3 py-1 border-r bg-gray-100">-</button>
                  <span className="px-4">2</span>
                  <button className="px-3 py-1 border-l bg-gray-100">+</button>
                </div>
              </td>
              <td className="p-3 tracking-wider">$118.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Coupon and Update Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-4 space-y-3 lg:space-y-0">
        <div className="flex border rounded overflow-hidden w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Coupon code"
            className="w-full p-2 border-r outline-none"
          />
          <button className="bg-black text-white px-4 py-2">APPLY COUPON</button>
        </div>
        <button className="bg-gray-500 text-white px-6 py-2 rounded">
          UPDATE CART
        </button>
      </div>
    </div>
    </div>
  )
}

export default Cart
