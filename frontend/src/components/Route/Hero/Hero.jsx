import React, { useState,useEffect } from "react";
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
      <Icon size={24} className="text-[#343252]" />
    </div>
  )
}

const ImageSlideshow = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn01D-fNVUlIVWa9oO_bnQ6NBttB2V0URLRQ&s",
    "https://5.imimg.com/data5/ECOM/Default/2024/7/439128150/JO/EO/LD/141264671/h9b6fd5c1e98a4bd2b1dfe25a11d89b67p-500x500.webp",
    "https://img.freepik.com/premium-photo/clothes-shopping-store-fashion-sale-shopping_926154-529.jpg",
    "https://www.ubuy.com.pk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFaQWhRcVBpRkwuX1NTNDAwXy5qcGc.jpg",
    "https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=612x612&w=0&k=20&c=0ZjhDRbcyZnKfOOHNBw5U_H5pqyg13LHLRb0B5iDgUY=",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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
    <div className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-[#E0E5EA] via-[#94A3B8] to-[#8292AB] flex items-center justify-start">
      {floatingItems.map((item, index) => (
        <FloatingIcon key={index} Icon={item.Icon} initialX={item.x} initialY={item.y} animationDelay={item.delay} />
      ))}

      <div className="absolute top-10 right-20 w-32 h-32 bg-[#343252]/5 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-[#343252]/5 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-10 w-16 h-16 bg-[#343252]/5 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="w-full">
            <h1 className="text-[35px] mt-8 leading-[1.2] md:text-[60px] text-[#343252] font-[600] capitalize">
              Best Collection for <br /> home Decoration
            </h1>
            <p className="pt-5 text-[16px] font-[400] text-[#343252]/80 max-w-2xl">
              Discover our curated selection of premium home decor items, electronics, fashion, and lifestyle products.{" "}
              <br className="hidden md:block" /> Transform your space with our carefully chosen collection that brings
              style and functionality <br className="hidden md:block" /> together in perfect harmony.
            </p>
            <Link to="/products" className="inline-block mt-8">
              <button className="bg-[#343252] hover:bg-[#241b20] text-white font-[500] text-[18px] px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Shop Now
              </button>
            </Link>
            <div className="my-12 pt-8 border-t border-[#343252]/20">
              <div className="grid grid-cols-3 gap-8 max-w-md">
                <div className="text-center">
                  <div className="text-[28px] md:text-[36px] font-bold text-[#343252] mb-1">1000+</div>
                  <div className="text-[14px] md:text-[16px] text-[#343252]/70 font-medium">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-[28px] md:text-[36px] font-bold text-[#343252] mb-1">50k+</div>
                  <div className="text-[14px] md:text-[16px] text-[#343252]/70 font-medium">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-[28px] md:text-[36px] font-bold text-[#343252] mb-1">99%</div>
                  <div className="text-[14px] md:text-[16px] text-[#343252]/70 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image slideshow */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <ImageSlideshow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;

