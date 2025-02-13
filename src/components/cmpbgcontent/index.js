import React from 'react'
import Button from '@mui/material/Button';

function Bgcontent(props) {
  return (
                 <div>
                     {/* content */}
                         <div className='text-[#FFFFFF] drop-shadow-md md:text-[13px] text-[13px] font-serif ... leading-[15.25px] lg:mb-4 md:mb-4 mb-3'>{props.text1}</div>
                         <div className='text-[#FFFFFF] drop-shadow-md md:text-[41px] text-[31px] lg:text-[51px] md:leading-[55px] leading-[45px] lg:leading-[55px] lg:mb-4 md:mb-4 mb-3 font-serif ... font-normal'>{props.text2}</div>
                         <div className='text-[#FFFFFF] drop-shadow-md md:text-[21px] lg:leading-[31px] font-serif ... leading-[27px] md:mb-9 lg:mb-7 mb-7'>{props.text3}</div>
                         <Button sx={{backgroundColor: "white", color: "black", paddingLeft:"25px", paddingRight:"25px",transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                  color: props.hc,
                                  backgroundColor: props.bhc,
                                }, paddingTop:"11px", paddingBottom:"11px" }}>   
                           SHOP NOW
                         </Button>
                        
                 </div>
  
  )
}

export default Bgcontent
