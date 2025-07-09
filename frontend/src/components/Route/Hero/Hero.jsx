import React from "react";
import { Link } from "react-router-dom";
import { FaGift, FaLaptop, FaCoffee, FaHeart, FaShoppingBag, FaGamepad, FaHeadphones, FaCamera, FaBook } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";           
import { GiTShirt } from "react-icons/gi";               
import { MdWatch } from "react-icons/md";                


const FloatingIcon = ({
  Icon,
  initialX,
  initialY,
  animationDelay,
  duration = "20s",
}) => {
  return (
    <div
      className="absolute opacity-10 animate-float"
      style={{
        left: initialX,
        top: initialY,
        animationDelay,
        animationDuration: duration,
      }}
    >
      <Icon size={24} className="text-[#42192f]" />
    </div>
  )
}

const Hero = () => {
 const floatingItems = [
  { Icon: FaGift, x: "10%", y: "20%", delay: "0s" },
  { Icon: FaLaptop, x: "80%", y: "15%", delay: "2s" },
  { Icon: MdDesktopMac, x: "15%", y: "60%", delay: "4s" },
  { Icon: FaCoffee, x: "85%", y: "70%", delay: "1s" },
  { Icon: FaHeart, x: "70%", y: "25%", delay: "3s" },
  { Icon: GiTShirt, x: "25%", y: "80%", delay: "5s" },
  { Icon: FaShoppingBag, x: "90%", y: "45%", delay: "1.5s" },
  { Icon: FaGamepad, x: "5%", y: "45%", delay: "3.5s" },
  { Icon: MdWatch, x: "60%", y: "85%", delay: "2.5s" },
  { Icon: FaHeadphones, x: "35%", y: "25%", delay: "4.5s" },
  { Icon: FaCamera, x: "75%", y: "60%", delay: "0.5s" },
  { Icon: FaBook, x: "45%", y: "15%", delay: "6s" },
]


  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-[#f5e6f0] via-[#ecd1e0] to-[#e3bdd0] flex items-center justify-start">

      {floatingItems.map((item, index) => (
        <FloatingIcon key={index} Icon={item.Icon} initialX={item.x} initialY={item.y} animationDelay={item.delay} />
      ))}

      <div className="absolute top-10 right-20 w-32 h-32 bg-[#42192f]/5 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-[#42192f]/5 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-10 w-16 h-16 bg-[#42192f]/5 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-[90%] md:w-[60%]">
          <h1 className="text-[35px] mt-8 leading-[1.2] md:text-[60px] text-[#42192f] font-[600] capitalize">
            Best Collection for <br /> home Decoration
          </h1>
          <p className="pt-5 text-[16px] font-[400] text-[#42192f]/80 max-w-2xl">
            Discover our curated selection of premium home decor items, electronics, fashion, and lifestyle products.{" "}
            <br className="hidden md:block" /> Transform your space with our carefully chosen collection that brings
            style and functionality <br className="hidden md:block" /> together in perfect harmony.
          </p>
          <Link href="/products" className="inline-block mt-8">
            <button className="bg-[#42192f] hover:bg-[#331425] text-white font-[500] text-[18px] px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Shop Now
            </button>
          </Link>
          <div className="my-12 pt-8 border-t border-[#42192f]/20">
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center">
                <div className="text-[28px] md:text-[36px] font-bold text-[#42192f] mb-1">1000+</div>
                <div className="text-[14px] md:text-[16px] text-[#42192f]/70 font-medium">Products</div>
              </div>
              <div className="text-center">
                <div className="text-[28px] md:text-[36px] font-bold text-[#42192f] mb-1">50k+</div>
                <div className="text-[14px] md:text-[16px] text-[#42192f]/70 font-medium"> Customers</div>
              </div>
              <div className="text-center">
                <div className="text-[28px] md:text-[36px] font-bold text-[#42192f] mb-1">99%</div>
                <div className="text-[14px] md:text-[16px] text-[#42192f]/70 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;

