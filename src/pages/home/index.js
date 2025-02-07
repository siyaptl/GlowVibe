import React from 'react';
import Header from '../../components/cmpheader';
import bgimage from '../../assets/ff.png';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <Header />

      <div className="relative overflow-auto min-h-screen mx">
        {/* background image */}
        <div 
          className="fixed top-0 w-screen bg-cover border-white bg-center bg-no-repeat z-[-1] border-x-8 lg:h-[99%] md:h-[571px] h-[413px]"
          style={{ backgroundImage: `url(${bgimage})` }}>
        </div>
        {/* content */}
        <div className='lg:w-[570px] lg:h-[322px] lg:ml-[145px] lg:mt-[165px] lg:text-left
                        md:w-[470px] md:h-[132px] md:mx-auto md:my-auto md:mt-24 md:text-center
                        w-[325px] h-[152px] mx-auto text-center mt-14'>
            <div className='text-[#FFFFFF] drop-shadow-md md:text-[13px] text-[13px] font-serif ... leading-[15.25px] lg:mb-4 d:mb-4 mb-3'>NEW IN TOWN</div>
            <div className='text-[#FFFFFF] drop-shadow-md md:text-[41px] text-[31px] md:leading-[55px] leading-[45px] lg:mb-4 md:mb-4 mb-3 font-serif ... font-normal'>THE NEW BEAUTY COLLECTION</div>
            <div className='text-[#FFFFFF] drop-shadow-md md:text-[21px] lg:leading-[31px] font-serif ... leading-[27px] md:mb-9 lg:mb-7 mb-7'>This new collection brings with it the most exciting lorem ipsum dolor sit amet.</div>
            <Button sx={{backgroundColor: "white", color: "black", "&:hover": { color: '#E88E9B'}, paddingLeft:"25px", paddingRight:"25px", paddingTop:"11px", paddingBottom:"11px" }}>   
              SHOP NOW
            </Button>
        </div>    
      </div>
    </>
  );
}
