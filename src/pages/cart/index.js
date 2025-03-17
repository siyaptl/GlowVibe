import React, { useEffect, useState } from 'react'
import Header from '../../components/cmpheader'

function Cart() {
     const [cart, setCart] = useState([]);

     useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    const total = calculateTotalPrice(updatedCart);  // Ensure total is calculated
    localStorage.setItem("totalPrice", total.toFixed(2)); 
    
    window.dispatchEvent(new Event("cartUpdated"));
};


  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity + delta > 0) {
      updatedCart[index].quantity += delta;
      updateCart(updatedCart);
    }
  };  

  const handleRemoveItem = (index) => {
    const itemName = cart[index]?.name;
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
    
    const parentElement = document.getElementById("parent");
    if (parentElement) {
      parentElement.textContent = `${itemName} Removed Successfully!`;
      parentElement.style.backgroundColor = "#e2aebc";
      parentElement.style.color = "#3d1c25";
      parentElement.style.visibility = "visible";
      setTimeout(() => {
        parentElement.style.visibility = "hidden";
      }, 1500);
    }
  };

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
// console.log(localStorage.getItem("totalPrice"));


      return (
    <div>
      <Header />
      <hr></hr>
      <p id="parent" className='fixed top-0 left-0 w-[76%] ml-[12%] py-3 text-center shadow-md z-50 invisible'> </p>

    {/* large screen */}
    {cart.length === 0 ? (
        <div className="text-center mt-10 text-gray-500 text-2xl">
          Your cart is empty.
        </div>
      ) : (<div className="container w-[87%] mx-auto p-4 mt-11 lg:block md:hidden hidden">
            <p className="text-4xl tracking-wide font-serif text-gray-800 mb-5">Cart</p>

      {/* Cart Table */}
      
      <div className="w-full overflow-x-auto border-[1px]">
        <table className="w-full border-slate-300">
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
            { cart.map((item, index) => (
            <tr key={index} className="h-28  border-[1px]">        
              <td className="p-3">
              <button onClick={() => handleRemoveItem(index)} className="text-gray-400 border rounded-full border-gray-400 hover:text-gray-500 hover:border-gray-500 ml-7 h-7 w-7 text-2xl flex items-center justify-center">
                    &times;
                  </button>
              </td>
              <td className="p-3 flex items-center">
                <img
                  src={item.innerimage1}
                  alt="Product"
                  className="w-16 h-20 object-cover border rounded"
                />
                </td>
                <td className='text-center'>
                 <span className="py-3 mx-auto tracking-wider">{item.name}</span>
                                  </td>

              <td className="p-3 text-gray-500 tracking-wider">${item.price.toFixed(2)}</td>
              <td className="p-3">
                <div className="flex items-center border rounded w-fit">
                <button 
                  onClick={() => handleQuantityChange(index, -1)} 
                  className="px-3 py-1 border-r bg-gray-100"
                >
                  -
                </button>                  
                  <span className="px-4">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(index, 1)} 
                    className="px-3 py-1 border-l bg-gray-100"
                  >
                    +
                  </button>
                    </div>
              </td>
              <td className="p-3 tracking-wider">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
            )
          )}
          </tbody>
        </table>
      </div>

      {/* Coupon and Update Section */}
      {cart.length === 0 ? (
        <div className="text-center mt-10 text-gray-500 text-2xl">
          Your cart is empty.
        </div>
      ) : (<div className="flex flex-col lg:flex-row justify-between p-3 space-y-3 lg:space-y-0 border">
        <div className="flex justify-between overflow-hidden w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Coupon code"
            className="w-[51%] p-2 border outline-none"
          />
          <button className="bg-black text-white text-sm w-[45%] px-4 py-3">APPLY COUPON</button>
        </div>
        <button className="bg-gray-500 text-white text-sm px-6 py-2 rounded">
          UPDATE CART
        </button>
      </div>)}
    </div>
)}

    {/* medu=ium and small screen */}
    {cart.length === 0 ? ("") :(
    <div className="container w-[100%] mx-auto p-4 lg:hidden md:flex md:flex-col flex flex-col">
      <p className="text-4xl tracking-wide font-serif text-gray-800 mb-5">Cart</p>

      {/* Cart Table */}
      { cart.map((item, index) => (
      <div key={index} className="w-full overflow-x-auto mt-3">
        <div className="w-full border-[1px] border-slate-300">
        <div className="w-full flex justify-end p-3 border-y-[1px]">
          <span className="text-gray-700 tracking-wider">
            <button onClick={() => handleRemoveItem(index)} className="rounded-full text-gray-400 border border-gray-400 hover:text-gray-500 hover:border-gray-500 ml-7 h-7 w-7 text-2xl flex items-center justify-center">
                    &times;
                  </button>
                   </span>
        </div>
        <div className="text-center">
              <img
                src={item.innerimage1}
                alt="Product"
                className="w-24 h-28 object-cover border mx-auto my-[7px]"
              />
          </div>
          <div className="w-full flex justify-between p-3 border-y-[1px]">
            <span className="text-left text-gray-700 tracking-wider">Product : </span>
            <span className="text-right tracking-wider">{item.name}</span>
          </div>
          <div className="w-full flex justify-between p-3 border-y-[1px]">
            <span className="text-left text-gray-700 tracking-wider">Price : </span>
            <span className="text-right tracking-wider text-gray-700">${item.price}</span>
          </div>
          <div className="w-full flex justify-between p-3 border-y-[1px]">
            <span className="text-left text-gray-700 tracking-wider my-auto">Quantity : </span>
            <span className="text-right tracking-wider">
              <div className="flex items-center border rounded w-fit">
                  <button onClick={() => handleQuantityChange(index, -1)} className="px-3 py-1 border-r bg-gray-100">-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}  className="px-3 py-1 border-l bg-gray-100">+</button>
                </div>
                </span>
          </div>
          <div className="w-full flex justify-between p-3 border-y-[1px]">
            <span className="text-left text-gray-700 tracking-wider">Subtotal : </span>
            <span className="text-right tracking-wider text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      </div> 
      )
      )}

      {/* Coupon and Update Section medium screen */}
      <div className="md:flex hidden flex-row lg:flex-row border-x-[1px] border-b-[1px] py-3 px-3 justify-between">
  <div className="flex">
    <input
      type="text"
      placeholder="Coupon code"
      className="w-auto pl-1 border-[1px] outline-none"
    />
    <button className="bg-black text-white px-5 py-[11px] ml-1">APPLY COUPON</button>
  </div>
  <button className="bg-gray-500 text-white px-6">
    UPDATE CART
  </button>
</div>



    {/* small screen */}
      <div className="flex md:hidden flex-col lg:flex-row justify-between py-5 px-3 border-x-[1px] border-b-[1px] space-y-3">
        <div className="flex justify-between overflow-hidden w-full lg:w-1/3 space-x-3">
          <input
            type="text"
            placeholder="Coupon code"
            className="p-2 border outline-none w-[49%]"
          />
          <button className="bg-black text-white px-4 text-base w-[49%]">APPLY COUPON</button>
        </div>
        <button className="bg-gray-500 text-white px-6 py-2 w-[99%]">
          UPDATE CART
        </button>
      </div>
    </div>)}
    </div>
  )
}

export default Cart
