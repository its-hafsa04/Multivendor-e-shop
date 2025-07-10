import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  const sponsors = [
    {
      src: "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png",
      alt: "Sony",
    },
    {
      src: "https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png",
      alt: "Dell",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/020/927/282/non_2x/lenovo-logo-brand-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg",
      alt: "Lenovo",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUlbM9bwiPgGLsfqcMpx3_M_6wlybVwOxgA&s",
      alt: "HP",
    },
    {
      src: "https://1000logos.net/wp-content/uploads/2017/06/Font-Samsung-Logo.jpg",
      alt: "Samsung",
    },
  ]

  return (
    <div className="hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden">
      <div className="relative">
        {/* Moving container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
              <img
                src={sponsor.src || "/placeholder.svg"}
                alt={sponsor.alt}
                className="w-32 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {sponsors.map((sponsor, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
              <img
                src={sponsor.src || "/placeholder.svg"}
                alt={sponsor.alt}
                className="w-32 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsored;
