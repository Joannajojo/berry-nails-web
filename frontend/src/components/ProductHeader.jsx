import React from "react";

const ProductHeader = ({ title }) => {
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div className="text-center mt-10 mb-5 ">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default ProductHeader;
