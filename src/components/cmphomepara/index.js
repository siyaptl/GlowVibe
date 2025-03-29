import React from "react";
import { Star } from "lucide-react";

function Parawstar() {
  return (
    <div className="mb-5">
      <span className="flex space-x-1 text-yellow-500 mt-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="lg:w-4 lg:h-4 w-3.5 h-3.5 fill-current" />
        ))}
      </span>
      <p className="lg:w-[491px] md:w-[351px] w-[83%] text-gray mt-3 tracking-wider">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas ac
        erat pretium, ultricies nibh quis, mattis massa.
      </p>
      <p
        style={{
          color: "#4B5563", // Equivalent to Tailwind's text-gray-600
          paddingTop: "11px",
          fontFamily: '"EB Garamond", "Playfair Display", serif', // Elegant Roman-style fonts
          letterSpacing: "0.05em", // Slight spacing for elegance
          fontWeight: "300", // Thin font
        }}
      >
        James Oliver
      </p>
      <div className="w-16 h-[1px] bg-gray-500 mt-5"></div>
    </div>
  );
}

export default Parawstar;
