import React from 'react'
import { Truck, ShoppingCart, RotateCcw } from "lucide-react";

function Whyus() {
    const features = [
        {
          icon: <Truck size={24} className="text-white" />,
          title: "Fast Delivery",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        },
        {
          icon: <ShoppingCart size={24} className="text-white" />,
          title: "Free Shipping",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        },
        {
          icon: <RotateCcw size={24} className="text-white" />,
          title: "Easy Returns",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        },
      ];
  return (
    <>
      <div className='bg-white lg:pt-24 md:pt-20 lg:pb-24 md:pb-20 pb-10 lg:flex'>
                <div>
                   <p style={{ 
                                  color: '#4B5563',  // Equivalent to Tailwind's text-gray-600
                                  paddingTop: '11px', 
                                  fontFamily: '"EB Garamond", "Playfair Display", serif',  // Elegant Roman-style fonts
                                  letterSpacing: '0.05em',  // Slight spacing for elegance
                                  fontWeight: '300'  // Thin font
                              }} className='lg:ml-24 md:text-center text-center'>
                                  Why choose us
                   </p>
                   <hr className="w-14 border-t-1 border-gray-400 my-4 md:mx-auto mx-auto lg:ml-24" />
                   </div>

                   <span className="lg:flex block items-center lg:space-x-10 md:space-x-3 lg:ml-44 lg:mt-0 mt-10 md:flex md:justify-center md:mx-7 md:mt-7">
                            {features.map((feature, index) => (
                                <div 
                                key={index} 
                                className="lg:flex md:flex block items-start lg:space-x-4 md:space-x-3 max-w-xs w-full sm:w-auto mx-auto"
                                >
                                <div className="bg-pink-300 lg:w-24 md:mt-3 md:w-28 w-9 md:h-8 lg:h-9 h-9 flex items-center justify-center rounded-full shadow-md mx-auto">
                                    {feature.icon}
                                </div>
                                <div className="text-center md:text-left lg:text-left">
                                    <h3 className="lg:text-[19px] md:text-[16px] text-[19px] mt-3 text-gray-800 leading-relaxed tracking-wider">
                                    {feature.title}
                                    </h3>
                                    <p className="text-gray-600 lg:text-[15px] md:text-[15px] mb-5 font-light leading-[25px] mt-1 tracking-wider">
                                    {feature.description}
                                    </p>
                                </div>
                                </div>
                            ))}
                    </span>
            </div>
    </>
  )
}

export default Whyus
