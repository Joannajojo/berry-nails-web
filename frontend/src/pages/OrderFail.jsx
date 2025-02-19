import React from "react";
import ProductHeader from "../components/ProductHeader";

const OrderFail = () => {
  return (
    <div>
      <ProductHeader title="Order Fail" />
      <div className="text-1xl m-auto text-red-600 w-1/2 pt-10">
        Fail to place order. Please try again.
      </div>
    </div>
  );
};

export default OrderFail;
