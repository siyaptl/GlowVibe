import React, { useEffect, useState } from 'react'
import Header from '../../components/cmpheader'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Trash2 } from 'lucide-react';

function Cart() {
     const [cart, setCart] = useState([]);
     const navigate = useNavigate(); // Initialize navigate

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
      setCart(updatedCart);
      calculateTotalPrice(updatedCart);
    }
  };  

  const handleRemoveItem = (index,item) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart)
    if(window.confirm(`'${item.name}' will be removed from the cart!`)){
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      const total = calculateTotalPrice(updatedCart);  // Ensure total is calculated
      localStorage.setItem("totalPrice", total.toFixed(2)); 

      window.dispatchEvent(new Event("cartUpdated"));
    }

    const parentElement = document.getElementById("parent");
    if (parentElement) {
        parentElement.innerHTML = `${item.name} Removed Successfully!`;
        parentElement.style.backgroundColor = "#D8E3C6";
        parentElement.style.color = "#3d1c25"
        parentElement.style.visibility = "visible";
        parentElement.style.opacity = "1";
        parentElement.style.transition = "opacity 0.5s ease-in-out";

        setTimeout(() => {
            parentElement.style.opacity = "0"; // Fade out effect
            setTimeout(() => {
                parentElement.style.visibility = "hidden"; // Hide the element
                parentElement.style.backgroundColor = ""; // Reset background
            }, 300); // Wait for fade-out transition before hiding
        }, 1500); // Display for 3 sec
    }
      };

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

      return (
    <div>
      <Header />
      <hr></hr>
      <ArrowBackOutlinedIcon onClick={()=>{navigate(-1)}} className="absolute lg:top-[95px] lg:left-5 md:top-[81px] md:left-7 top-[73px] left-3 text-gray-500 z-50 cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out" sx={{borderRadius:"50%", height:"31px", width:"31px"}}></ArrowBackOutlinedIcon>

      <p id="parent" className='fixed top-0 left-0 w-[76%] ml-[12%] py-3 text-center shadow-md z-50 invisible'> </p>

    {/* large screen */}
    {cart.length === 0 ? (
        <div className="text-center mt-10 text-gray-500 text-2xl">
          Your cart is empty.
        </div>
      ) : (<div className="container w-[87%] mx-auto p-4 mt-2 lg:block md:hidden hidden">
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
              <button onClick={() => handleRemoveItem(index,item)} className="text-gray-400 border rounded-full border-gray-400 hover:text-gray-500 hover:border-gray-500 ml-7 h-7 w-7 text-2xl flex items-center justify-center">
                <Trash2 size={13} />
                  </button>
              </td>
              <td className="p-3 flex items-center">
                <img
                  src={item.innerimage1}
                  alt="Product"
                  onClick={() => navigate(`/description/${item.id}`)}
                  className="w-16 h-20 object-cover border rounded cursor-pointer"
                />
                </td>
                <td className='text-center'>
                 <span className="py-3 mx-auto tracking-wider cursor-pointer" onClick={() => navigate(`/description/${item.id}`)}>{item.name}</span>
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
        <button onClick={() => {
    if (window.confirm("Do you want to update the cart?")) {
      updateCart(cart);
    }
  }}  className="bg-gray-700 text-white hover:bg-gray-900 text-sm px-6 py-2 rounded">
          UPDATE CART
        </button>
      </div>)}
    </div>
)}

    {/* medu=ium and small screen */}
    {cart.length === 0 ? ("") :(
    <div className="container w-[100%] mx-auto p-4 lg:hidden md:flex md:flex-col flex flex-col mt-16">
      <p className="text-4xl tracking-wide font-serif text-gray-800 mb-5">Cart</p>

      {/* Cart Table */}
      { cart.map((item, index) => (
      <div key={index} className="w-full overflow-x-auto mt-3">
        <div className="w-full border-[1px] border-slate-300">
        <div className="w-full flex justify-end p-3 border-y-[1px]">
          <span className="text-gray-700 tracking-wider">
            <button onClick={() => handleRemoveItem(index,item)} className="rounded-full text-gray-400 border border-gray-400 hover:text-gray-500 hover:border-gray-500 ml-7 h-7 w-7 text-2xl flex items-center justify-center">
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
  <button 
  onClick={() => {
    if (window.confirm("Do you want to update the cart?")) {
      updateCart(cart);
    }
  }} 
  className="bg-gray-700 text-white hover:bg-gray-900 px-6">
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
        <button onClick={() => {
    if (window.confirm("Do you want to update the cart?")) {
      updateCart(cart);
    }
  }}  className="bg-gray-700 text-white hover:bg-gray-900 px-6 py-2 w-[99%]">
          UPDATE CART
        </button>
      </div>
    </div>)}
    </div>
  )
}

export default Cart
