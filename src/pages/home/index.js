import React from 'react';
import Header from '../../components/cmpheader';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Maininfo from '../../components/cmpmaininfo';
import Productcard from '../../components/productcard';
import Bgimg from '../../components/cmpbgimg';
import Bgcontent from '../../components/cmpbgcontent';
import Parawstar from '../../components/cmphomepara';

export default function Home() {
    const CustomDot = ({ onMove, index, onClick, active }) => (
      <li
        onClick={() => onClick()}
        style={{
          display: "inline-block",
          width: "6px",
          height: "6px",
          margin: "5px",
          backgroundColor: active ? "#666" : "#ccc",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      />
    )

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
      }
    };

    return (
      <>
        <Header />
        <div className="relative min-h-screen">

          {/* large screen */}
            <div className=' lg:block hidden'>
                {/* background image */}
                <Bgimg />
                <div className='lg:w-[570px] lg:h-[322px] lg:ml-[145px] lg:mt-[165px] lg:text-left'>
                  <Bgcontent text1="NEW IN TOWN" text2="THE NEW BEAUTY COLLECTION" text3="This new collection brings with it the most exciting lorem ipsum dolor sit amet." hc="#E88E9B" />
                  </div>
                </div>
          
          {/* Medium and Small Screens */}
        <div className="relative lg:hidden block">
          {/* Background Image */}
          <Bgimg />

          {/* Content Overlay */}
          <div className="absolute top-11 md:top-28 left-0 w-full flex flex-col justify-center items-center text-center p-5">
            <div className="md:w-[470px] md:h-[132px] w-[325px] h-[152px]">
              <Bgcontent 
                text1="NEW IN TOWN" 
                text2="THE NEW BEAUTY COLLECTION" 
                text3="This new collection brings with it the most exciting lorem ipsum dolor sit amet." 
                hc="#E88E9B" 
              />
            </div>
          </div>
        </div>

          
              <Carousel
                responsive={responsive}
                showDots={true}
                arrows={false}
                infinite={false}
                keyBoardControl={true}
                dotListClass="custom-dot-list-style"
                customDot={<CustomDot />} 
                className='bg-white lg:pt-5 lg:mt-[153px]
                            md:pt-3 md:mt-[31px]
                            pt-3 pb-[27.2px] mt-[21px]'
      >
                {Array.from({ length: 13 }).map((_, index) => (
                  <div
                    key={index}
                    className="lg:w-[239.83px] lg:h-[115.71px] md:w-[93%] md:h-[115.71px] w-[91%] h-[91.71px] bg-white text-black p-10 shadow-sm border border-black-100 lg:mx-auto md:mx-auto mx-auto"
                  >
                    Item {index + 1}
                  </div>
                ))}
              </Carousel>

              <div className='h-[153.25px] pt-[73px] w-screen bg-white text-gray-800 text-center mb-0'>
                  <Maininfo infoupper="POPULAR PRODUCTS" infolower="Trending Now" />
                </div>

              <div className="w-screen bg-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-4">
                {[...Array(4)].map((_, i) => (
                <Productcard key={i}  />
              ))}
              </div>  

              <div className='lg:h-[163.25px] md:h-[93.25px] h-[103px] lg:pt-[73px] pt-[33px] md:pt-[13px] w-screen bg-white text-gray-800 text-center mb-0'>
                <Maininfo infoupper="SHOP" infolower="Best Selling" />
              </div>
              <div className="w-screen bg-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-4 lg:pb-16">
              {[...Array(4)].map((_, i) => (
              <Productcard key={i}  />
            ))}
              </div> 

            {/* large screen */}
            <div className=' lg:block hidden'>
                {/* background image */}
                <Bgimg />
                <div className='lg:w-[570px] lg:h-[522px] lg:ml-[145px] lg:mt-[171px] lg:text-left'>
                  <Bgcontent text1="NEW COLLECTION" text2="The beauty collection that makes all the difference!" text3="Aliquam vulputate, nunc vitae suscipit aliquet, libero arcu hendrerit sapien." hc="#E88E9B" />
                  </div>
                </div>
          
          {/* Medium and Small Screens */}
              <div className="relative lg:hidden block">
                {/* Background Image */}
                <Bgimg />

                {/* Content Overlay */}
                <div className="absolute top-11 md:top-28 left-0 w-full flex flex-col justify-center items-center text-center p-5">
                  <div className="md:w-[470px] md:h-[132px] w-[325px] h-[152px]">
                    <Bgcontent 
                      text1="NEW COLLECTION" text2="The beauty collection that makes all the difference!" text3="Aliquam vulputate, nunc vitae suscipit aliquet, libero arcu hendrerit sapien." hc="#E88E9B" 
                    />
                  </div>
                </div>
        </div>


            <div className='bg-white lg:h-[851px] md:h-[851px] lg:w-screen md:w-[361px] w-[97%] px-5 lg:pt-16 md:pt-16 pt-12 lg:pl-24 md:pl-14 pl-7'>
              <div>
              <p className='pb-3' style={{ 
                            color: '#4B5563',  
                            paddingTop: '11px', 
                            fontFamily: '"EB Garamond", "Playfair Display", serif',  
                            letterSpacing: '0.05em',  
                            fontWeight: '300' 
                        }}>
                            Jane Oliver
                        </p>
                <h2 style={{color: '#374151', fontFamily: '"EB Garamond", "Playfair Display", serif',  lg:{fontWeight: '300'},  lineHeight: '1.1',  letterSpacing: '0.05em'}} className='lg:w-[531px] md:w-[331px] lg:text-[2.5875rem] md:text-[1.875rem] text-[31px] font-serif font-thin'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere...
                </h2>
                <div className="w-16 h-[1px] bg-gray-500 mt-7"></div>
                </div>
              </div>

              <div className='lg:ml-[855px] md:ml-[411px] ml-7 lg:mt-[-791px] md:mt-[-791px] lg:pt-0 md:pt-0 pt-11 bg-white pb-16'>
              <div className=" grid lg:grid-rows-3 md:grid-rows-2 grid-rows-1 gap-4 ">
                    {[...Array(3)].map((_, i) => (
                    <Parawstar key={i}  />
                  ))}
              </div> 
            </div>
            </div>
      </>
    );
}
