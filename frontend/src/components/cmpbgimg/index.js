import React, { useState, useEffect } from "react";
import bgimage1 from "../../assets/bg1.png";
import bgimage2 from "../../assets/bg2.avif";

function Bgimg() {
  const [bgImg, setBgImg] = useState(bgimage1);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setBgImg(bgimage2); // Change background after 300px scroll
      } else {
        setBgImg(bgimage1); // Revert when scrolled up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);
  return (
    <>
      <div
        className="lg:fixed scroll top-0 w-[100%] bg-cover border-white bg-center bg-no-repeat z-[-1] border-x-8 lg:h-[100%] md:h-[571px] h-[413px]"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
    </>
  );
}

export default Bgimg;
