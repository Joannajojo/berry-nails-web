import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cart";
import ProductHeader from "../components/ProductHeader";
import {
  FaCalculator,
  FaCashRegister,
  FaCcMastercard,
  FaCcVisa,
  FaLocationDot,
  FaMessage,
} from "react-icons/fa6";
import { useOrderStore } from "../store/order";

const Checkout = () => {
  const loc = useLocation(); //get current URL
  const navigate = useNavigate();
  const { selectedItems } = loc.state;
  const { fetchSelectedItems, updateSelectedCartItemsStatus } = useCartStore();
  const [selectedCartItems, setSelectedCartItems] = useState([]);
  const [initTotal, setinitTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [noteToSeller, setNoteToSeller] = useState("");
  const [collectionMethod, setCollectionMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const { createOrder } = useOrderStore();
  useEffect(() => {
    const fetchSelected = async () => {
      const items = await fetchSelectedItems(selectedItems);

      setSelectedCartItems(items);
    };
    fetchSelected();
  }, [selectedItems]);

  useEffect(() => {
    let price = [];
    selectedCartItems.map((item) => {
      price.push(item.product.price * item.product.quantity);

      // selectedItems.filter((item)=>)
    });

    let initValue =
      price.length > 0 ? price.reduce((acc, item) => acc + item, 0) : 0;

    setinitTotal(initValue);
    setTotal(initValue + 2); //price after shipping fee
  }, [selectedCartItems]);

  selectedCartItems.map((item) => {
    if (!item.products || !item.products.image) {
      return <p>Loading...</p>;
    }
  });

  const handlePlaceOrder = async () => {
    const placeOrder = async () => {
      const prods = selectedCartItems.map((item) => ({
        productId: item.product.productId,
        name: item.product.name,
        quantity: item.product.quantity,
        size: item.product.size,
        price: item.product.price,
        image: item.product.image,
      }));
      const newOrder = {
        userId: "user123",
        products: prods,
        totalPrice: total,
        name: "John Doe",
        address: "34, Flowery Hill ,23432 Canston, Billsburg, Malaysia",
        phone: "+6 0247851365",
        email: "8V0Ft@example.com",
        note: noteToSeller,
        collectionMethod: collectionMethod,
        paymentMethod: paymentMethod,
      };

      const res = await createOrder(newOrder);
      if (res && res.success) {
        const res2 = await updateSelectedCartItemsStatus(
          selectedItems,
          "confirmed"
        );
        const orderId = res.data._id;

        if (res2.success)
          navigate("/success", { state: { orderId: res.data._id } });
        else navigate("/fail");
      } else console.log("Fail to create order");
    };
    placeOrder();
  };
  return (
    <div className=" m-auto w-[90%] mb-10">
      <ProductHeader title="Checkout" />
      <div className="mt-10 mb-10 text-sm flex flex-row justify-between">
        <div>
          <div className="flex font-bold">
            <FaLocationDot />
            <span className="ml-2 mb-5">Billing Details</span>
          </div>
          <div className="ml-5">
            <p>Name: John Doe</p>
            <p>
              Shipping Address: 34, Flowery Hill ,23432 Canston, Billsburg,
              Malaysia
            </p>
            <p>Phone number: +6 0247851365 </p>
            <p>Email: 8V0Ft@example.com</p>
          </div>

          <div className="flex gap-2 ml-5 mt-4">
            <span className="font-bold">Collection method:</span>
            <input
              type="radio"
              name="collect-method"
              id="self"
              value={"self"}
              onSelect={() => setCollectionMethod("self")}
            />
            <label htmlFor="self">Self-pickup</label>
            <input
              type="radio"
              name="collect-method"
              id="delivery"
              value={"delivery"}
              onSelect={() => setCollectionMethod("self")}
              defaultChecked
            />
            <label htmlFor="delivery">Delivery</label>
          </div>
        </div>
        <div className="flex flex-col mr-3">
          <span className="flex items-center">
            <FaMessage className="mr-2" /> Request to Seller (optional):{"  "}
          </span>
          <textarea
            name=""
            id=""
            cols="85"
            rows="4"
            className="bg-white-200 border mt-3 pl-2"
            placeholder="Please leave a message"
            value={noteToSeller}
            onChange={(e) => setNoteToSeller(e.target.value)}
          ></textarea>
        </div>
      </div>
      {selectedCartItems?.length > 0 &&
        selectedCartItems.map((item) => {
          return (
            <div className="bg-customBeige  flex flex-row justify-between p-4 mt-2 mb-2 rounded-md">
              <div className="flex flex-row">
                <img
                  src={item.product ? item.product.image : ""}
                  alt=""
                  className="ml-2 mr-2 w-12 h-12 "
                />
                <div>
                  {" "}
                  <p className="font-bold mb-1 text-base">
                    {item.product.name} Nails
                  </p>
                  <p>
                    {item.product.size}, {item.product.category} Nails ,
                    quantity: {item.product.quantity}
                  </p>
                </div>
              </div>

              <div>
                <p className="pr-2">RM{item.product.price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      <div className="mt-5 mb-5 text-sm">
        <div className="flex flex-row  items-center">
          <FaCashRegister className="font-bold" />{" "}
          <span className="ml-2 mr-5 font-bold">Payment method:</span>
          <div className="flex flex-row gap-1 mr-4 items-center">
            <input
              type="radio"
              name="payment"
              id="visa"
              value="visa"
              onChange={() => setPaymentMethod("visa")}
              defaultChecked
            />
            <FaCcVisa />
            <label htmlFor="visa">VISA</label>
          </div>
          <div className="flex flex-row gap-1 mr-4 items-center">
            <input
              type="radio"
              name="payment"
              id="mastercard"
              value="mastercard"
              onChange={() => setPaymentMethod("mastercard")}
            />
            <FaCcMastercard />
            <label htmlFor="mastercard">MasterCard</label>
          </div>
          <div>
            <input type="radio" name="payment" id="others" />

            <label className="ml-1" htmlFor="others">
              Others
            </label>
          </div>
        </div>
      </div>

      <div className="text-sm ">
        <div className="font-bold mt-5 mb-5 flex items-center">
          <FaCalculator />
          <span className="ml-2">Payment Details</span>
        </div>
        <div className="mb-5 ml-5">
          <p>Subtotal: RM {initTotal.toFixed(2)}</p>
          <p>Shipping Fee: RM 2.00</p>

          <p className="font-bold">Total: RM {total.toFixed(2)}</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-end items-center mt-5">
        <p className="font-bold">Total: RM {total.toFixed(2)} </p>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-5"
          onClick={() => handlePlaceOrder()} //theres a problem here
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
