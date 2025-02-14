import React from 'react'
import Header from '../../components/cmpheader';
import aboutimg from '../../assets/aboutimg.jpg';
import aboutimg2 from '../../assets/aboutimg2.jpg'

function About() {
  return (
    <>
      < Header />

      <div className='w-screen bg-white lg:flex md:flex hidden justify-evenly pb-0'>
                <div className='h-[511px] lg:w-[98%] md:w-[96%] w-[99%] bg-cover bg-bottom' style={{ backgroundImage: `url(${aboutimg})` }}>
                <div className='lg:ml-[93px] lg:mt-[215px]
                                md:ml-[23px] md:mt-[213px]'>
                      <div className='text-[#FFFFFF] drop-shadow-md md:text-[15px] text-[13px] lg:text-[15px] font-serif ... leading-[15.25px] lg:mb-4 md:mb-2 mb-3'>A few words</div>
                      <div className='text-[#FFFFFF] drop-shadow-md md:text-[51px] text-[31px] lg:text-[71px] md:leading-[55px] leading-[45px] lg:leading-[55px] lg:mb-4 md:mb-4 mb-3 font-serif ... font-normal'>About us</div>
                </div>
                </div>
      </div>

      <div className='w-screen bg-white pt-0 pb-11 lg:hidden md:hidden block'>
                <div className='h-[271px] w-[91%] bg-cover bg-left mx-auto' style={{ backgroundImage: `url(${aboutimg})`}}>
                <div className='mt-[23px] pt-24 pl-5 mx-auto'>
                      <div className='text-[#FFFFFF] drop-shadow-md text-[15px] font-serif ... leading-[15.25px] mb-3'>A few words</div>
                      <div className='text-[#FFFFFF] drop-shadow-md text-[43px] leading-[31px] font-serif ... font-normal'>About us</div>
                </div>
                </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start lg:px-12 lg:pt-12 md:px-12 md:pt-12 pt-1 lg:mt-7 pb-5 px-5">
      {/* Left Section */}
      <div className="lg:w-[35%] md:w-1/2  lg:ml-11 md:ml-[-11px] w-full pr-6">
        <h1 className="font-playfair lg:text-[41px] md:text-[32px] text-[29px] text-gray-800 lg:leading-tight md:leading-[31px] leading-[33px] tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p className="font-roboto text-sm text-gray-800 md:mt-5 tracking-widest lg:mt-5 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="w-14 h-[1px] bg-[#cc9999] mt-5"></div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[46%] w-full md:w-[55%] bg-lightPink md:p-12 p-7 bg-[#FFF2F4] lg:px-[91px] lg:py-[85px] lg:mr-14 lg:mt-[-95px] md:mr-[-13px] md:mt-[-65px] mt-7 pt-11 pb-11">
        <h2 className="font-playfair text-[17px] lg:text-[22px] lg:leading-7 md:leading-6 leading-[22px] md:text-[20px] text-gray-800 lg:tracking-wide md:tracking-wide tracking-normal">
          Cras ut ultricies risus. Etiam ac malesuada lectus. Sed congue nisi vitae lorem ullamcorper laoreet. In eget tellus mauris. Phasellus id ligula.
        </h2>
        <p className="font-roboto text-gray-600  lg:text-base md:text-sm text-sm leading-relaxed mt-5 lg:tracking-wider md:tracking-widest tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna.
        </p>
        <p className="font-roboto text-gray-600 lg:text-base md:text-sm text-sm leading-relaxed mt-4 lg:tracking-wider md:tracking-widest tracking-wider lg:mt-7">
          Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id.
        </p>
      </div>
    </div>

    {/* 2nd bg content */}
    <div className='w-screen bg-white flex justify-center items-center pb-7 lg:h-[671px] md:h-[541px] h-[525px]'>
                <div className='lg:h-[100%] md:h-[100%] h-[100%] w-[90%] bg-cover bg-center' style={{ backgroundImage: `url(${aboutimg2})` }}>
                <div className='lg:pt-16 md:pt-24 pt-[25%] flex items-center lg:mt-24 flex-col'>
                      <div className='text-[#FFFFFF] drop-shadow-md lg:text-[45px] md:text-[41px] text-[29px] leading-[45px] font-serif ... font-normal'>About Our Products</div>
                      <hr className="w-14 border-t-1 border-white md:mx-auto mx-auto lg:my-5 md:my-5 my-3" />
                      <div className='text-[#FFFFFF] lg:w-[69%] md:w-[81%] w-[85%] lg:text-[24px] md:text-[19px] text-[18.5px] font-serif ... lg:leading-[27.25px] md:leading-[27.25px] leading-[24.25px] text-center tracking-wide'>Proin at velit sed elit varius porttitor. Ut a suscipit quam, eu congue odio. Sed eget viverra est. Vivamus ut sodales neque. Sed vel dui et dolor placerat egestas id lacinia mauris</div>
                </div>
                </div>
      </div>

    {/* <div className='w-screen bg-white pt-0 pb-11 lg:hidden md:hidden block'>
                <div className='h-[271px] w-[91%] bg-cover mx-auto' style={{ backgroundImage: `url(${aboutimg2})`}}>
                <div className='mt-[23px] pt-24 pl-5 mx-auto'>
                      <div className='text-[#FFFFFF] drop-shadow-md text-[15px] font-serif ... leading-[15.25px] mb-3'>A few words</div>
                      <div className='text-[#FFFFFF] drop-shadow-md text-[43px] leading-[31px] font-serif ... font-normal'>About Our Products</div>
                </div>
                </div>
            
      </div> */}
    </>
  )
}

export default About
