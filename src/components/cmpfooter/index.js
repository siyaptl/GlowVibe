import React from 'react'

function Footer() {
  return (
    <div className='bg-white lg:pb-5 md:pb-5 pb-5'>
        <footer className="bg-pink-50 text-gray-800 mx-5 pt-7">
            {/* Newsletter Subscription */}
            <div className="container mx-auto px-5 lg:pl-14 md:pb-3 lg:flex md:flex block">
                <h2 className="text-lgh2 font-serif lg:text-2xl lg:block md:block lg:pb-0 md:pb-0 pb-5 flex justify-center md:text-xl text-2xl font-light tracking-wide lg:py-5 md:mt-[15px]">Subscribe to our newsletter</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center mt-3 space-y-3 sm:space-y-0 sm:space-x-3 lg:ml-[37%]">
                <input
                    type="email"
                    placeholder="Your email address..."
                    className="border border-gray-300 px-4 py-3 lg:w-full md:w-64 w-[100%] md:ml-20 sm:w-96 rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <button className="bg-black text-white lg:px-5 md:px-4 py-3 w-full rounded-sm hover:bg-[#c27e94] hover:text-black transition">
                    SUBSCRIBE
                </button>
                </div>
            </div>
            <hr className='border-t-1 border-gray-500 w-[100%] md:mt-5 mt-5 lg:mt-7'/>

            {/* Footer Content */}
            <div className="container mx-auto px-5 py-1 mt-10 lg:mb-10 md:mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 text-center md:text-left lg:pl-11">
                {/* Logo */}
                <div className="flex flex-col items-center md:items-start lg:pt-16 md:pt-[63px] pb-7">
                    <h3 className="text-2xl font-bold">Be Bold</h3>
                    <p className="text-gray-500 text-sm">BEAUTY STORE</p>
                </div>

                {/* Navigation Links */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-rows-1 lg:ml-[51%] lg:w-[311px] md:ml-20 md:w-[275px]">
                    <ul className="space-y-1 lg:mt-3 md:mt-4">
                    <li><a href="/shopall" className="hover:text-gray-500">Shop All</a></li>
                    <li><a href="/makeup" className="hover:text-gray-500">Makeup</a></li>
                    <li><a href="skincare" className="hover:text-gray-500">Skin Care</a></li>
                    <li><a href="/about" className="hover:text-gray-500">About</a></li>
                    <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
                    </ul>

                    <ul className="space-y-1 md:pt-7 pt-7">
                    <li><a href="/refund" className="hover:text-gray-500">Refund Policy</a></li>
                    <li><a href="/terms" className="hover:text-gray-500">Terms & Conditions</a></li>
                    <li><a href="/faq" className="hover:text-gray-500">FAQ</a></li>
                    <li><a href="/privacy" className="hover:text-gray-500">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start lg:space-x-5 md:space-x-1 space-x-1 pb-5 lg:ml-5 lg:pt-[61px] md:pl-40 md:pt-[71px] pt-5">
                <button onClick={() => window.open("https://facebook.com", "_blank")} className="text-gray-900 hover:text-pink-300 text-xl">
                    <i className="fab fa-facebook"></i>
                    </button>
                    <button onClick={() => window.open("https://twitter.com", "_blank")} className="text-gray-900 hover:text-pink-300 text-xl">
                    <i className="fab fa-twitter"></i>
                    </button>
                    <button onClick={() => window.open("https://instagram.com", "_blank")} className="text-gray-900 hover:text-pink-300 text-xl">
                    <i className="fab fa-instagram"></i>
                    </button>
                </div>
                </div>
            </div>
            <hr className='border-t-1 border-gray-500 w-[100%] mt-5'/>

            {/* Copyright */}
            <div className="lg:py-11 md:py-11 py-11 flex items-center lg:pl-14 md:pl-7 lg:justify-normal md:justify-normal justify-center text-center text-gray-600 lg:text-base md:text-sm text-[13px] tracking-wider">
                Copyright © 2025 Be Bold | Powered by Be Bold
            </div>
            </footer>
    </div>
  )
}

export default Footer
