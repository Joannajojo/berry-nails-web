import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductHeader from "../components/ProductHeader";

const OrderSuccess = () => {
  const loc = useLocation();
  const order = loc.state?.orderId;

  return (
    <div className="m-auto">
      <ProductHeader title="Order Successfully Placed!" />
      {order ? (
        <div className="text-1xl m-auto text-green-600 w-1/2 mt-10 bg-customBeige bg-opacity-70 rounded-md p-5">
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
      {/* <button className="text-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-5">
        Back to Home
      </button> */}
    </div>
  );
};

export default OrderSuccess;
