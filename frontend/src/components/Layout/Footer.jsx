import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { IoLogoMedium } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="w-full mt-16 bg-[#42192f] rounded-2xl py-12 px-4 md:px-12">
  <div className="text-center">
    <div className="mb-8">
      <h2 className="lg:text-4xl text-3xl lg:leading-normal font-semibold text-white">
        <span className="text-[#f5e6f0]">Transform</span> your space with our <br />
        curated collection
      </h2>
    </div>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white mb-1">Free</div>
          <div className="text-sm text-white/80">Shipping</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white mb-1">24/7</div>
          <div className="text-sm text-white/80">Support</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white mb-1">Easy</div>
          <div className="text-sm text-white/80">Returns</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white mb-1">Quality</div>
          <div className="text-sm text-white/80">Guarantee</div>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://i.pinimg.com/736x/f6/d0/af/f6d0af482a5a1116dbbd2fd3ff95e58c.jpg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
          <div className="flex items-center mt-[15px]">
            <Link to="https://github.com/its-hafsa04">
              <div className="bg-[#42192f] text-white p-2 rounded-full inline-flex items-center justify-center hover:opacity-80 transition">
                <AiOutlineGithub
                    size={25} className="cursor-pointer"
                />
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/hafsa-sajid-38bb4627b/">
              <div className="bg-[#42192f] text-white p-2 rounded-full inline-flex items-center justify-center hover:opacity-80 transition">
                <AiFillLinkedin
                  size={25} className="cursor-pointer" 
                />
              </div>
            </Link>
            <Link to="https://medium.com/@sajidhafsa23">
              <div className="bg-[#42192f] text-white p-2 rounded-full inline-flex items-center justify-center hover:opacity-80 transition">
                <IoLogoMedium
                  size={25} className="cursor-pointer" 
                />
              </div>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100010268648729">
              <div className="bg-[#42192f] text-white p-2 rounded-full inline-flex items-center justify-center hover:opacity-80 transition">
                <AiFillFacebook size={25} className="cursor-pointer" />
              </div>
            </Link>
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-[#42192f]">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-[#42192f]">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-[#42192f]">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span> All rights reserved by Hafsa Sajid © 2024.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://multivendor-e-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
