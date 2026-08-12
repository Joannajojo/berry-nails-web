import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductHeader from "../components/ProductHeader";

const OrderSuccess = () => {
  const loc = useLocation();
  const order = loc.state?.orderId;

  return (
    <div className="flex flex-col min-h-screen">
      <ProductHeader title="Order Successfully Placed!" />
      <div className="flex-grow flex items-center justify-center">
        {order ? (
          <div className="text-1xl m-auto text-green-600 w-1/2 mt-10 bg-customBeige bg-opacity-70 rounded-md p-5 border">
            <p>
              You have successfully made a purchase! Your order id is{" "}
              <strong>{order}</strong>.
            </p>
            <p>
              You may refer to the tracking status of the product in{" "}
              <a href="#" className="underline hover:text-blue-600">
                here
              </a>
              . For further details, please contact us via +012345678. Thank you
              for supporting BerryFancyNails!
            </p>
          </div>
        ) : (
          <h2 className="text-1xl m-auto text-red-600 w-1/2 pt-10">
            Unable to retrieve your order. Please try again.
          </h2>
        )}
      </div>
    </div>
  );
};

export default OrderSuccess;
