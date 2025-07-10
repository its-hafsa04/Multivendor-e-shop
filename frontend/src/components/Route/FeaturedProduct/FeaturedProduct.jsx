import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const {allProducts} = useSelector((state) => state.products);
  const [showAll, setShowAll] = useState(false);

  const getDisplayedProducts = () => {
    
    if (showAll) return allProducts;
    if (window.innerWidth >= 1280) return allProducts.slice(0, 10); 
    if (window.innerWidth >= 1024) return allProducts.slice(0, 8);  
    if (window.innerWidth >= 768) return allProducts.slice(0, 6);  
    return allProducts.slice(0, 3);                                 
  };

  const productsToDisplay = getDisplayedProducts();
   
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {productsToDisplay.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>

      {!showAll && allProducts?.length > productsToDisplay.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-[#343252] text-white rounded-lg hover:bg-[#1f1e33] transition"
          >
            View All Products
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
