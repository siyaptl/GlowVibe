import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Header from "../../components/cmpheader";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const userOrders = allOrders.filter(
      (order) => order.username === currentUser?.username
    );

    setMyOrders(userOrders);
  }, []);
  
  const isOrderWithin24Hours = (placedAt) => {
    const orderTime = new Date(placedAt).getTime();
    const currentTime = Date.now();
    return currentTime - orderTime < 24 * 60 * 60 * 1000; // 24 hours in ms
  };

  const handleRemoveProduct = (orderId, itemId, itemName) => {
    const updatedOrders = myOrders.map((order) => {
      if (order.id === orderId) {
        // Check if within 24 hours
        const orderTime = new Date(order.placedAt);
        const now = new Date();
        const diffInMs = now - orderTime;
        const diffInHours = diffInMs / (1000 * 60 * 60);
  
        if (diffInHours <= 24) {
          const updatedItems = order.items.filter((item) => item.id !== itemId);
          alert(`Your order for ${itemName} is cancelled.`);
          return { ...order, items: updatedItems };
        } else {
          return order;
        }
      }
      return order;
    });
  
    const cleanedOrders = updatedOrders.filter(order => order.items.length > 0);
  
    setMyOrders(cleanedOrders);
    localStorage.setItem("orders", JSON.stringify(
      JSON.parse(localStorage.getItem("orders")).map(order => {
        if (order.username !== JSON.parse(localStorage.getItem("currentUser"))?.username) {
          return order;
        }
        const updatedOrder = cleanedOrders.find(o => o.id === order.id);
        return updatedOrder || null;
      }).filter(Boolean)
    ));
  };
  

  
  
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 pt-[70px] p-6">
      <ArrowBackOutlinedIcon
        onClick={() => {
          navigate(-1);
        }}
        className="absolute md:top-[81px] md:left-5 top-[73px] left-3 text-gray-500 z-50 cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out lg:top-[95px] lg:left-5"
        sx={{ borderRadius: "50%", height: "31px", width: "31px" }}
      ></ArrowBackOutlinedIcon>
      
      <div className="lg:pl-3 xl:pl-3 md:pl-0 pl-0">
      <div className="flex justify-between items-center mb-5 mt-3">
        <h2 className="text-5xl font-semibold text-[#c27e94]">My Orders</h2>
      </div>
      <div className="flex justify-start my-5 mt-7">
  <div className="bg-[#fef2f4] border border-[#c27e94] rounded-xl shadow-md p-6 w-full max-w-md">
    <h3 className="text-xl font-semibold text-[#c27e94] mb-2 text-left">Grand Total</h3>
    <p className="text-left text-2xl font-bold text-gray-800">
      $
      {myOrders
        .reduce(
          (orderAcc, order) =>
            orderAcc +
            order.items.reduce(
              (itemAcc, item) => itemAcc + item.price * item.quantity,
              0
            ),
          0
        )
        .toFixed(2)}
    </p>
  </div>
</div>
      {myOrders.length === 0 ? (
        <p className="text-gray-600">No orders placed yet.</p>
      ) : (
        myOrders.map((order) => (
          <div
          key={order.id}
          className="bg-white rounded shadow-md p-5 mb-6 border-l-4 border-[#c27e94]"
        >
          <div className="flex justify-end mt-1">
          {isOrderWithin24Hours(order.placedAt) && (
          <button
          onClick={() => handleRemoveProduct(order.id)}
          className="text-xs ml-auto bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-lg hover:bg-red-200 transition-all duration-200 shadow-sm"
        >
          Cancel
        </button>
        )}
        </div>
          <ul className="mb-3">
          {order.items.map((item, idx) => (
            
  <li
    key={idx}
    className="flex items-center justify-between py-2 text-gray-800"
  >
    
    <div className="flex items-center gap-3 w-full">
      <img
        src={item.innerimage1}
        alt={item.name}
        onClick={() => navigate(`/description/${item.id}`)}
        className="w-16 h-20 object-cover border rounded cursor-pointer"
      />
      
      <div>
        <div className="font-medium">{item.name} (x{item.quantity})</div>
       
      </div>
      
    </div>
    <span className="font-medium">
      ${item.price * item.quantity}
    </span>
  </li>
))}

          </ul>
          
          {/* Slightly smaller order info */}
          <div className="mb-2 text-sm tracking-widest">
            <span className="font-semibold">Order ID:</span> #{order.id}
          </div>
          <div className="mb-2 text-sm tracking-widest">
            <span className="font-semibold">Placed At:</span> {order.placedAt}
          </div>
          <div className="mb-2 text-sm tracking-widest">
            <span className="font-semibold">Address:</span>{" "}
            {`${order.address.street1}, ${order.address.street2}, ${order.address.city}, ${order.address.state} - ${order.address.zip}`}
          </div>
        </div>
         ))
      )}
     
     </div>

    </div>
    </>
  );
};

export default MyOrders;
