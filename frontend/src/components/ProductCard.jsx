import React from "react";
import prod1 from "../assets/nail1.jpg";
const ProductCard = ({ product }) => {
  return (
    <div className="m-2 p-2 hover:shadow-2xl hover:shadow-customBeige`">
      <img
        className="w-full object-cover h-64 overflow-hidden"
        src={product.images[0]}
        alt={product.name}
      />
      <p>{product.name} Nails</p>
      <p>RM{product.price}</p>
    </div>
  );
};

export default ProductCard;
