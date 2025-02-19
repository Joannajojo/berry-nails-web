import React from "react";
import { useNavigate } from "react-router-dom";

const ProdCardGeneral = ({ product }) => {
  const navigate = useNavigate();
  const handlePaths = (id) => {
    if (id) {
      navigate(`/${id}`);
    } else {
      console.error("Product ID is missing.");
    }
  };
  return (
    <div className="m-2 p-2 hover:shadow-2xl hover:shadow-customBeige`">
      <a
        onClick={() =>
          handlePaths(product._id ? product._id : product.productId)
        }
      >
        <img
          className="w-full object-cover h-64 overflow-hidden"
          src={product.image}
          alt={product.name}
        />
        <div className="p-2">
          <p>{product.name} Nails</p>
          <p>RM{product.price}</p>
        </div>
      </a>
    </div>
  );
};

export default ProdCardGeneral;
