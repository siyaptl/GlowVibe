import { Star } from "lucide-react";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

function Productcard({id, name, price, discountPrice, innerimage1, innerimage2, innerimage3, innerimage4, category, description1, description2, moredescription}) {
  
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

  const navigate = useNavigate();

  return (
    <div className="lg:mb-0 mb-2 bg-white relative group" onClick={() => navigate(`/description/${id}`)}>
      {/* Product Image Placeholder */}
      <div className="hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-100 min-w-[111px] w-full bg-pink-100 rounded-lg">
      <img src={innerimage1} alt={name} />
      <span className="absolute opacity-0 group-hover:opacity-100 top-3 right-3 bg-[#fdfdfb] h-9 w-9 mt-0 flex items-center justify-center rounded-full shadow-md ">
      <BootstrapTooltip title={<span style={{ fontSize: '13px', padding:'11px' }}>Add to cart</span>} placement="left">
          <LocalMallIcon className="text-slate-700 " fontSize="small" />
          </BootstrapTooltip>
        </span>
      </div>

      {/* Star Ratings */}
      <span className="flex space-x-1 text-slate-700 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="lg:w-4 lg:h-4 w-3.5 h-3.5" />
        ))}
      </span>

      {/* Product Name */}
      <h2 className="lg:text-[17px] text-[15px] tracking-widest text-gray-800 lg:mt-2 mt-1 font-serif">
            {name}
      </h2>

      {/* Product Price */}
      <p className="lg:text-[14px] text-[12px] tracking-wider font-semibold lg:mt-1 mt-0">
        <span className="text-gray-500 line-through">${price}</span>
        <span className="text-gray-700 ml-2">${discountPrice}</span>
      </p>
    </div>
  );
}

export default Productcard;
