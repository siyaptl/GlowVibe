import React from 'react'
import Header from '../../components/cmpheader'
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import belowdescription from '../../assets/homeproducts/belowdescription.jpg'
import { Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from '../../components/cmpfooter';
import { beautyProductsrow } from '../../config/staticdata';
import krudes from '../../assets/krupdes.jpg';
import Bgcontent from '../../components/cmpbgcontent';
import Cart from '../cart';

function Description() {
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { id } = useParams();
  const product = beautyProductsrow.find((item) => item.id.toString() === id);
  const [selectedimg, setSelectedimg] = useState(product.innerimage1)

  const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || []; 
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        cartItems.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems)); 

    const parentElement = document.getElementById("parent");
    if (parentElement) {
        parentElement.innerHTML = `${product.name} Added Successfully!`;
        parentElement.style.backgroundColor = "#e2aebc";
        parentElement.style.color = "#3d1c25"
        parentElement.style.visibility = "visible";
        parentElement.style.opacity = "1";
        parentElement.style.transition = "opacity 0.5s ease-in-out";

        setTimeout(() => {
            parentElement.style.opacity = "0"; // Fade out effect
            setTimeout(() => {
                parentElement.style.visibility = "hidden"; // Hide the element
                parentElement.style.backgroundColor = ""; // Reset background
            }, 500); // Wait for fade-out transition before hiding
        }, 3000); // Display for 3 sec
    }
};

    

    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && email && review && rating) {
        const newReview = { name, email, review, rating };
        setReviews([...reviews, newReview]);
        setName("");
        setEmail("");
        setReview("");
        setRating(0);
      } else {
        alert("Please fill in all fields.");
      }
    }
      
        
  return (
    <>
      <Header />
      <hr className="w-full border-t-1 border-gray-200" />
      <div id="parent" className='fixed top-0 left-0 w-full py-3 text-center shadow-md z-50 invisible'></div>

      <div className="flex justify-center items-center lg:mt-[110px] mt-5 md:mt-[50px]">
            <div className="lg:w-[83%] md:w-[85%] w-[91%] flex md:flex-col lg:flex-row flex-col">
              <div className='flex lg:flex-col flex-col md:flex-col lg:w-1/2'>
                <div
                  id={product.id}
                  className="lg:w-full md:bg-center p-6 flex justify-center items-center relative h-[412px] lg:h-[712px] md:h-[712px] bg-center bg-cover cursor-pointer"
                  style={{ backgroundImage: `url(${selectedimg})` }}
                >
                <span className="absolute top-4 left-4 bg-white px-3 py-1 text-sm text-gray-600 tracking-wider rounded-full shadow">
                  Sale!
                </span>
              </div>
              <div className="flex mt-5 justify-between">
                    {[product.innerimage1, product.innerimage2, product.innerimage3, product.innerimage4].map((image, index) => (
                      <div
                        key={index}
                        className="lg:h-[139px] lg:w-[139px] md:h-[159px] md:w-[159px] h-[89px] w-[89px] bg-cover bg-center transition-all duration-300 brightness-75 hover:brightness-100"
                        style={{ backgroundImage: `url(${image})` }} onClick={() => setSelectedimg(image)}
                      ></div>
                      ))} 
                  </div>

            </div>

              <div className="lg:w-1/2 lg:p-3 lg:ml-7 pl-2 md:mt-7 mt-7 lg:mt-0">
              <p className="text-sm text-gray-500 mb-5 tracking-widest"><span>  <Link to="/">Home</Link></span> / <span ><Link to='/skincare'>{product.category}</Link></span> / {product.name}</p>
                <p className="text-base text-gray-700 mb-3 tracking-wider">{product.category}</p>
                <h1 className="text-3xl font-serif tracking-wider mb-3">{product.name}</h1>
                <p className="text-[21px] text-gray-700 mt-2">
                  <span className="line-through text-gray-400">{product.price}</span> <span className="font-bold text-slate-700">{product.discountPrice}</span><span className='text-[13.5px] tracking-wider'> & Free Shipping </span>
                </p>
                <p className="text-gray-600 mt-2 font-light text-[16px] tracking-wider leading-[25px] mr-16">
                {product.description1}
                </p>

                <p className="text-gray-600 mt-4 font-light text-[16px] tracking-wider leading-[25px] mr-16">{product.description2}</p>
                
                <div className="flex items-center mt-6 space-x-4">
                <div className="flex items-center border px-3 py-1">
                <button
                  className="pr-3 py-2 text-gray-500 flex items-center justify-center border-r"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus size={11} />
                </button>
                <span className="px-4 text-[13px] text-gray-500 flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  className="pl-3 py-2 text-gray-500 flex items-center justify-center border-l"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus size={13} />
                </button>
              </div>

              <button onClick={addToCart} className="bg-black text-white lg:px-5 w-[150px] md:px-4 py-[6.5px] hover:bg-[#c27e94] hover:text-black transition">
              ADD TO CART
                      </button>
                </div>
                
                <hr className="w-full border-t-1 border-gray-200 mt-5" />
                <p className="text-sm text-gray-500 mt-4 tracking-wider">Category:<span className='text-gray-700'> {product.category}</span></p>
              </div>
            </div>
          </div>

        {/* description and review */}
          <div className="w-[85%] mt-16 mx-auto"> 

          <div className="flex border-t">
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === "description"
                  ? "border-t-2 border-black text-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === "reviews"
                  ? "border-t-2 border-black text-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          {/* Content Section */}
      <div className="mt-10 pb-7">
        {activeTab === "description" ? (
          <div>
            <h2 className="text-[33px] mb-3 font-serif tracking-wider text-gray-900">More about the product</h2>
            <p className='tracking-widest w-[71%] text-gray-700'>
              {product.moredescription}
            </p>
            <div className="lg:w-full md:bg-center p-6 flex justify-center items-center relative h-[412px] lg:h-[652px] md:h-[712px] bg-center bg-cover mt-9 brightness-110"  style={{ backgroundImage: `url(${belowdescription})`}}>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6 bg-black/30">
        <div className='lg:mt-[331px] md:mt-[331px] mt-[211px]'>
          <p className="uppercase lg:text-xs md:text-xs text-[11px] tracking-widest font-light">
            NUNC SED JUSTO
          </p>
          <h2 className="lg:text-3xl text-xl tracking-widest lg:w-[85%] mx-auto md:text-2xl md:w-[95%] font-serif font-thin leading-snug mt-3">
            Cras vehicula semper ex, et fermentum tortor varius eget interdum et
            malesuada fames ac ante 
          </h2>
          <div className="lg:mt-7 md:mt-7 mt-3 w-14 border-t-[1px] border-white mx-auto"></div>
        </div>
      </div>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row items-start justify-between max-w-6xl py-16">
      {/* Left Section */}
      <div className="lg:w-1/2 md:w-1/2 w-full">
  <h2 className="lg:text-[33px] md:text-[29px] text-[27px]  font-serif tracking-wider leading-snug text-gray-900">
    Product's Features
  </h2>
  <div className="mt-7 w-16 border-t-[1px] border-pink-300"></div>
</div>



      {/* Right Section */}
      <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-5">
        <p className="text-[20px] tracking-wider font-light font-serif text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="mt-6 space-y-4">
          {/* Feature 1 */}
          <div className="flex items-center border-t pt-3">
            <span className="text-gray-600 text-lg">⦿</span>
            <p className="ml-3 text-gray-700 tracking-wider">Nunc sed justo at nisi commodo varius</p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center border-t pt-3">
            <span className="text-gray-600 text-lg">⦿</span>
            <p className="ml-3 text-gray-700 tracking-wider">Ut eu urna enim. Curabitur posuere fermentum</p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center border-t pt-3">
            <span className="text-gray-600 text-lg">⦿</span>
            <p className="ml-3 text-gray-700 tracking-wider">Curabitur at orci nec urna aliquet porta</p>
          </div>
        </div>
      </div>
    </div>
          </div>
        ) : (
          <div className=" bg-white rounded-lg mx-auto lg:mb-0 md:mb-0 mb-11 ">

          {reviews.length > 0 && (
            <div className="mb-11">
              {reviews.map((rev, index) => (
                <div key={index} className="mt-3 flex items-start pt-3">
                  {/* Profile Avatar */}
                  <div className="w-[51px] h-[51px] bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 text-2xl">👤</span> {/* Placeholder Avatar */}
                  </div>

                  <div>
                    <p className="text-lg italic text-gray-500">Your review is awaiting approval</p>

                    {/* Star Rating */}
                    <div className="flex text-slate-500 gap-x-0 text-2xl">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < rev.rating ? "text-slate-500" : "text-gray-300"}>
                          <Star className='w-5 h-5 mt-1 ml-1' fill={i < rev.rating ? "currentColor" : "none"} stroke="currentColor"></Star>
                        </span>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 mt-1">{rev.review}</p>

                    {/* Reviewer's Name */}
                    <p className="text-sm text-gray-500 font-medium">{rev.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

      <form onSubmit={handleSubmit} className="mt-4 border px-7 py-5">
        <label className="block font-medium text-[21px] text-slate-600">Add a review </label>
        <label className="block font-medium text-[17px] text-slate-500 mt-1 tracking-wider">Your email address will not be published. Required fields are marked * </label>
        <div className='flex mt-5'>
        <label className="block font-medium text-[19px] text-slate-600 tracking-wider">Your rating * </label>
        <div className="flex space-x-1 text-slate-600 mt-[5px] ml-5">
          {[...Array(5)].map((_, i) => (
            <Star
            key={i}
            className={`lg:w-6 lg:h-6 w-5 h-5 cursor-pointer transition-colors ${
              i < rating ? "text-slate-500" : "text-gray-500"
            }`}
            fill={i < rating ? "currentColor" : "none"} // Fill star when selected
            onClick={() => setRating(i + 1)}
          />
          ))}
        </div>
        </div>

        <label className="block font-medium text-[19px] text-slate-600 mt-3 mb-1 tracking-wider">Your rating * </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full h-24 border p-2 mb-4"
          required
        ></textarea>

        <div className="flex flex-col lg:flex-row md:flex-row lg:space-x-4 md:space-x-4">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <label className="block font-medium text-slate-600 tracking-wider mb-1">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 h-14"
              required
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-3">
            <label className="block font-medium text-slate-600 tracking-wider mb-1">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 h-14"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-black text-white px-9 mb-3 py-3 hover:bg-[#c27e94] tracking-wider"
        >
          SUBMIT
        </button>
      </form>
      
    </div>

        )}
      </div>
    </div>
     <div className='lg:p-5 md:p-5'></div>

     <div className='h-[571px] w-[91%] bg-cover bg-left shadow-inner mx-auto mb-11' style={{ backgroundImage: `url(${krudes})`, boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.3)" }}>
                      <div className='w-[83%] h-[593px] mt-[23px] pt-[210px] text-center ml-1'>
                            <Bgcontent 
                                  text1="KRUPALI" 
                                  text2="KRUPALI" 
                                  text3="Find your unique style." 
                                  hc="#FDF5E6" 
                                  bhc="#5C4033"/>
                      </div>
                </div>

    <Footer />
   </>
  )
}

export default Description
