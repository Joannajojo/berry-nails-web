import React, { useEffect, useState } from "react";
import ProductHeader from "../components/ProductHeader";
import { useCartStore } from "../store/cart";
import { FaArrowRight, FaPenToSquare, FaTrash } from "react-icons/fa6";
import { FaSquarePen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Cart = () => {
  const navigate = useNavigate();
  const { fetchCartItems, deleteCartItem, cartItem } = useCartStore();
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkout, setCheckout] = useState(false);
  //fetch cart items when page reload
  useEffect(() => {
    const fetchCart = async () => {
      await fetchCartItems();
    };
    fetchCart();
  }, [fetchCartItems]);

  useEffect(() => {
    let price = [];
    cartItem.map((item) => {
      if (selectedItems.includes(item._id)) {
        price.push(item.product.price * item.product.quantity);
      }
      // selectedItems.filter((item)=>)
    });

    let initTotal =
      price.length > 0 ? price.reduce((acc, item) => acc + item, 0) : 0;

    setTotal(initTotal);
    selectedItems.length > 0 ? setCheckout(true) : setCheckout(false);
    console.log("Selected Items:", selectedItems);
  }, [selectedItems]);

  const deleteCart = async (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    }
    await deleteCartItem(id);
  };

  const handleCheckedItem = async (id) => {
    if (!selectedItems.includes(id)) {
      setSelectedItems([...selectedItems, id]);
    } else {
      //remove selected item

      setSelectedItems(selectedItems.filter((cartItem) => cartItem !== id));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="pt-5 w-full ">
          <ProductHeader title="Cart" />
          {cartItem.length > 0 ? (
            <div>
              {cartItem.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-row gap-4  bg-customBeige p-2 mb-2 rounded-md text-sm justify-between items-center border-2"
                >
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      value={item._id}
                      onChange={() => handleCheckedItem(item._id)}
                    />
                    <div>
                      <img src={item.product.image} className="w-14 h-14" />
                    </div>
                    <div className="flex flex-col space-y-3">
                      <p className="font-bold">{item.product.name}</p>
                      <div className="flex gap-2 text-xs">
                        <p>RM{item.product.price}</p>
                        <p>Qty: {item.product.quantity}</p>
                        <p>Size: {item.product.size}</p>
                        <p>{item.product.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {/* <button className="bg-blue-500 p-2 hover:bg-blue-600" onClick={()=>}>
                <FaSquarePen />
              </button> */}
                    <button
                      className="bg-red-500 p-2 hover:bg-red-600"
                      onClick={() => deleteCart(item._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex flex-row  justify-between mt-5">
                <p className="font-bold">Total: RM {total.toFixed(2)}</p>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-5"
                  disabled={!checkout}
                  onClick={() =>
                    navigate("/checkout", { state: { selectedItems } })
                  }
                >
                  <div className="flex flex-row items-center">
                    <span className="mr-2">Checkout</span>
                    <FaArrowRight className="text-sm" />
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-center pt-10 pb-10">Your cart is empty.</p>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
