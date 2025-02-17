import React from 'react' 
import { useState } from "react";
import Header from '../../components/cmpheader'
import aboutimg from '../../assets/bgcontact.avif';
import bgimgicon from '../../assets/bgcontacticon.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
     <Header />    

     <div className='w-screen bg-white lg:flex md:flex hidden justify-evenly pb-0'>
                <div className='h-[511px] lg:w-[98%] md:w-[96%] w-[99%] bg-cover bg-center relative' style={{ backgroundImage: `url(${aboutimg})` }}>
                <div className='lg:h-[311px] lg:w-[35%] md:h-[351px] md:w-[41%] bg-cover bg-center absolute lg:top-24 lg:right-32 md:top-20 md:right-10 lg:block md:block hidden' style={{ backgroundImage: `url(${bgimgicon})` }}>
                </div>
                <div className='lg:ml-[93px] lg:mt-[215px]
                                md:ml-[23px] md:mt-[213px]'>
                      <div className='text-[#FFFFFF] drop-shadow-md md:text-[15px] text-[13px] lg:text-[15px] font-serif ... leading-[15.25px] lg:mb-4 md:mb-2 mb-3'>GET IN TOUCH</div>
                      <div className='text-[#FFFFFF] drop-shadow-md md:text-[51px] text-[31px] lg:text-[71px] md:leading-[55px] leading-[45px] lg:leading-[55px] lg:mb-4 md:mb-4 mb-3 font-serif ... font-normal'>Message us</div>
                </div>
                </div>
      </div>

        {/* small screen */}
      <div className='w-screen bg-white pt-0 pb-11 lg:hidden md:hidden block'>
                <div className='h-[271px] w-[91%] bg-cover bg-left mx-auto' style={{ backgroundImage: `url(${aboutimg})`}}>
                <div className='h-[131px] w-[25%] bg-cover bg-center absolute top-32 right-7 lg:hidden md:hidden block' style={{ backgroundImage: `url(${bgimgicon})` }}>
                </div>
                <div className='mt-[5px] pt-24 pl-5 mx-auto'>
                      <div className='text-[#FFFFFF] drop-shadow-md text-[15px] font-serif ... leading-[15.25px] mb-3'>GET IN TOUCH</div>
                      <div className='text-[#FFFFFF] drop-shadow-md text-[43px] leading-[31px] font-serif ... font-normal'>Message us</div>
                </div>
                </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center lg:mt-5 md:mt-5  lg:pl-20">
      {/* Contact Info */}
      <div className=" lg:p-8 md:p-8 px-10 w-full md:w-1/2 pb-7">
      <p className='lg:text-[45px] md:text-[37px] text-[31px] font-serif ...leading-[15.25px] lg:mb-1 md:mb-1 md:mt-[-31px] pb-3'>Contact Us</p>
        <p className="text-gray-600 lg:w-[55%] md:w-[371px] w-[325px] tracking-wider leading-6 md:text-[15px] text-[14.5px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
          tempor, congue justo at, lobortis orci.
        </p>
        <div className="lg:mt-9 md:mt-7 mt-5 space-y-2">
          <h6 className="flex items-center lg:text-[17.5px] md:text-[15px] text-[13px] tracking-wider hover:text-[#c27e94]"><LocationOnIcon className="mr-3" fontSize="small" /> 123 Fifth Avenue, New York, NY 10160</h6>
          <h6 className="flex items-center lg:text-[17.5px] md:text-[15px] text-[13px] tracking-wider hover:text-[#c27e94]"><EmailIcon className='mr-3' fontSize="small"/>contact@info.com</h6>
          <h6 className="flex items-center lg:text-[17.5px] md:text-[15px] text-[13px] tracking-wider hover:text-[#c27e94]"><CallIcon className='mr-3' fontSize="small"/>9-334-7565-9787</h6> 
         </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[#fcf0f4] w-[96%] md:w-[48%] lg:w-[732.4px] lg:h-[673.4px] lg:pl-20 lg:pt-28 lg:mr-2 md:p-9 py-7 lg:block md:block flex justify-center">
        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label className="block text-[17px] font-semibold text-gray-600 tracking-wider">Name <span className='text-red-500'> * </span> </label>
            <div className="flex space-x-3">
              <input type="text" name="firstName" required className="lg:w-64 lg:h-[51px] md:w-40 md:h-[47px] w-[141px] h-[47px] p-2 border text-gray-700 focus:outline-none" onChange={handleChange} />
              <input type="text" name="lastName" required className="lg:w-64 lg:h-[51px] md:w-40 md:h-[47px] w-[141px] h-[47px]  p-2 border focus:outline-none" onChange={handleChange} style={{backgroundColor:'white'}} />
            </div>
          </div>
          <div>
            <label className="block text-[17px] font-semibold  text-gray-600">Email <span className='text-red-500'> * </span></label>
            <input type="email" name="email" required className="lg:w-[520px] lg:h-[51px] md:w-[331px] md:h-[47px] w-full h-[47px] bg-white p-2 border focus:outline-none" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-[17px] font-semibold text-gray-600">Message <span className='text-red-500'> * </span></label>
            <textarea name="message" required className="lg:w-[520px] md:w-[331px] w-full bg-white p-2 border h-[131px] focus:outline-none" rows="5" onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-6 py-2 rounded-sm hover:bg-[#c27e94]">SEND</button>
        </form>
      </div>
    </div>


    </>
  )
}

export default Contact
