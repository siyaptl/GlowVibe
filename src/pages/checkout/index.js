import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import checkoutimg from "../../assets/checkout.jpg";
import { HomeIcon } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState({
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [showorder, setShowOrder] = useState(false);
  const [takeaddress, setTakeAddress] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [invalidFields, setInvalidFields] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (currentUser && users.length > 0) {
      const matchedUser = users.find(
        (user) => user.username === currentUser.username
      );

      if (matchedUser) {
        setFirstName(matchedUser.firstname || "");
        setLastName(matchedUser.lastname || "");
        setUsername(matchedUser.username || "");
        setContact(matchedUser.contact || "");

        if (matchedUser.address) {
          setAddress(matchedUser.address);
        }
      }
    }

    setCartItems(userCart);
    setTotalPrice(
      userCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "zip") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 6) {
        setAddress({ ...address, [name]: numericValue });
      }
    } else if (
      ["street1", "street2", "city", "state"].includes(name) &&
      value.length <= 50
    ) {
      setAddress({ ...address, [name]: value });
    }

    if (
      value.trim() === "" &&
      ["street1", "city", "state", "zip"].includes(name)
    ) {
      setInvalidFields((prev) => ({ ...prev, [name]: true }));
    } else {
      setInvalidFields((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleAddress = () => {
    const requiredFields = ["street1", "city", "state", "zip"];
    const newInvalidFields = {};

    requiredFields.forEach((field) => {
      if (!address[field].trim()) {
        newInvalidFields[field] = true;
      }
    });

    if (Object.keys(newInvalidFields).length > 0) {
      setInvalidFields(newInvalidFields);
      alert("Please fill in all required address fields.");
      return;
    }

    setInvalidFields({});

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.username === currentUser.username
    );

    if (matchedUser) {
      const isAddressChanged =
        matchedUser.address.street1 !== address.street1 ||
        matchedUser.address.street2 !== address.street2 ||
        matchedUser.address.city !== address.city ||
        matchedUser.address.state !== address.state ||
        matchedUser.address.zip !== address.zip;

      if (isAddressChanged) {
        const updatedUsers = users.map((user) =>
          user.username === currentUser.username ? { ...user, address } : user
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    }
  };

  const handlePlaceOrder = () => {
    const requiredFields = ["street1", "city", "state", "zip"];
    const newInvalidFields = {};

    requiredFields.forEach((field) => {
      if (!address[field].trim()) {
        newInvalidFields[field] = true;
      }
    });

    if (Object.keys(newInvalidFields).length > 0) {
      setInvalidFields(newInvalidFields);
      alert("Please fill in all required address fields.");
      return;
    }

    localStorage.removeItem("cart");
    setOrderPlaced(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const isAnyAddressFieldEmpty = () => {
    return (
      !address.street1.trim() ||
      !address.city.trim() ||
      !address.state.trim() ||
      !address.zip.trim()
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 pt-[91px]">
      <ArrowBackOutlinedIcon
        onClick={() => navigate(-1)}
        className="absolute top-8 left-7 text-gray-500 z-50 cursor-pointer hover:text-gray-700 hover:bg-gray-100"
        sx={{ borderRadius: "50%", height: "31px", width: "31px" }}
      />

      <div className="flex justify-between">
        <h2 className="text-5xl font-semibold mb-7 text-[#c27e94]">Checkout</h2>
        <div className="text-right">
          <div className="to-gray-900 tracking-wide">
            {firstName} {lastName}
          </div>
          <div className="tracking-widest text-[9.5px] text-gray-700">
            {username}
          </div>
        </div>
      </div>

      {orderPlaced ? (
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded shadow-md">
          <AiOutlineCheckCircle className="text-green-500 text-6xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-500">Redirecting to homepage...</p>
        </div>
      ) : (
        <>
          <div className="max-h-screen bg-gray-100 flex justify-center items-center">
            <div className="flex flex-wrap md:flex-nowrap bg-white overflow-hidden w-full">
              <div className="w-full md:w-1/2">
                <img
                  src={checkoutimg}
                  alt="Checkout"
                  className="w-full h-full object-cover object-left"
                />
              </div>

              {!takeaddress && (
                <div className="w-full md:w-1/2 p-6">
                  <h3 className="text-2xl font-medium mb-5 text-gray-700">
                    Delivery Address
                  </h3>
                  <div className="text-gray-900 border-[3px] p-4 mb-4">
                    <p>
                      {address.street1}, {address.street2}
                    </p>
                    <p>
                      {address.city}, {address.state} - {address.zip}
                    </p>
                    <button
                      onClick={() => setTakeAddress(true)}
                      className="mt-5 px-7 py-2 bg-gray-700 text-white rounded-sm hover:bg-[#c27e94] hover:text-gray-900"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => {
                        handleAddress();
                        setShowOrder(true);
                      }}
                      className="mt-3 px-5 py-2 bg-gray-700 text-white rounded hover:bg-[#c27e94] hover:text-gray-900"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {takeaddress && (
                <div className="w-full md:w-1/2 p-6">
                  <h3 className="text-2xl font-medium mb-5 text-gray-700">
                    Delivery Address
                  </h3>
                  <div className="text-gray-700">
                    <input
                      type="text"
                      name="street1"
                      value={address.street1}
                      onChange={handleChange}
                      placeholder="Street 1"
                      className={`w-full border p-3 rounded mb-2 ${
                        invalidFields.street1 ? "border-red-500" : ""
                      }`}
                      required
                    />
                    <input
                      type="text"
                      name="street2"
                      value={address.street2}
                      onChange={handleChange}
                      placeholder="Street 2 (optional)"
                      className="w-full border p-3 rounded mb-2"
                    />
                    <input
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={handleChange}
                      placeholder="City"
                      className={`w-full border p-3 rounded mb-2 ${
                        invalidFields.city ? "border-red-500" : ""
                      }`}
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      value={address.state}
                      onChange={handleChange}
                      placeholder="State"
                      className={`w-full border p-3 rounded mb-2 ${
                        invalidFields.state ? "border-red-500" : ""
                      }`}
                      required
                    />
                    <input
                      type="text"
                      name="zip"
                      value={address.zip}
                      onChange={handleChange}
                      placeholder="ZIP Code"
                      className={`w-full border p-3 rounded mb-2 ${
                        invalidFields.zip ? "border-red-500" : ""
                      }`}
                      required
                    />
                    <div className="text-right">
                      <button
                        onClick={() => {
                          handleAddress();
                          if (!isAnyAddressFieldEmpty()) {
                            setTakeAddress(false);
                          }
                        }}
                        disabled={isAnyAddressFieldEmpty()}
                        className={`mt-3 px-5 py-2 rounded text-white ${
                          isAnyAddressFieldEmpty()
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gray-700 hover:bg-[#c27e94] hover:text-gray-900"
                        }`}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {showorder && (
            <>
              <div className="bg-white p-5 rounded shadow-md mt-5">
                <h3 className="text-xl font-medium mb-3">Order Summary</h3>
                <ul>
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="border-b py-2 flex justify-between"
                    >
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span>${item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between font-semibold mt-3">
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={handlePlaceOrder}
                  className="mt-5 px-5 py-2 bg-gray-700 text-white rounded hover:bg-[#c27e94] hover:text-gray-900"
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
