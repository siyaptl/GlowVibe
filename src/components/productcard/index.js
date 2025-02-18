import React from 'react';
import { Star } from "lucide-react";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


function Productcard() {
  
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.slate,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.slate,
    },
  }));

  return (
    <div className="lg:mb-0 mb-2 bg-white ">
      {/* Product Image Placeholder */}
      <div className="hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-100 min-w-[111px] w-full lg:h-[421px] md:h-[291px] h-[211px] bg-pink-100 rounded-lg">
      <span className="absolute top-3 right-3 bg-[#fdfdfb] h-9 w-9 flex items-center justify-center rounded-full shadow-md ">
      <BootstrapTooltip title={<span style={{ fontSize: '13px', padding:'11px' }}>Add to cart</span>} placement="left">
          <LocalMallIcon className="text-slate-700 " fontSize="small" />
          </BootstrapTooltip>
        </span>
      </div>

      {/* Star Ratings */}
      <span className="flex space-x-1 text-slate-700 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="lg:w-4 lg:h-4 w-3.5 h-3.5" />
        ))}
      </span>

      {/* Product Name */}
      <h2 className="lg:text-[17px] text-[15px] tracking-widest text-gray-800 lg:mt-2 mt-1 font-serif">
        Product Name
      </h2>

      {/* Product Price */}
      <p className="lg:text-[14px] text-[12px] tracking-wider font-semibold lg:mt-1 mt-0">
        <span className="text-gray-500 line-through">$50.00</span>
        <span className="text-gray-700 ml-2">$35.00</span>
      </p>
    </div>
  );
}

export default Productcard;
