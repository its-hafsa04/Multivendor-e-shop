import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [visibleCount, setVisibleCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  // Update visibleCount based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleCount(10); // xl
      } else if (width >= 1024) {
        setVisibleCount(6); // lg
      } else if (width >= 768) {
        setVisibleCount(4); // md
      } else {
        setVisibleCount(3); // sm
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const displayedProducts = showAll ? allProducts : allProducts?.slice(0, visibleCount);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 xl:grid-cols-5 mb-12">
          {displayedProducts &&
            displayedProducts.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
        </div>
        {!showAll && allProducts?.length > visibleCount && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#343252] text-white px-6 py-2 rounded-md hover:bg-[#2c2f38] transition"
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
