import React from "react";

const DisplayCard = ({ item }) => {
  return (
    <div className="m-2 p-2 hover:shadow-2xl hover:shadow-customBeige cursor-pointer `">
      <img
        className="w-full object-cover h-64 overflow-hidden"
        src={item.image}
        alt={item.name}
      />
      <div className="p-2">
        <p>{item.name} Nails</p>
        <p>RM{item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DisplayCard;
