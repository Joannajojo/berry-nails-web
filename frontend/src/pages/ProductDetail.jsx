import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useState } from "react";
import { useCartStore } from "../store/cart";

const ProductDetail = () => {
  const { _id } = useParams();
  const { fetchSingleProduct, products } = useProductStore(); // Access the product store
  const { createCartItem } = useCartStore();
  // const [newCartItem, setNewCartItem] = useState({
  //   userId: "user123",
  //   product: {
  //     productId: _id,
  //     name: "",
  //     category: "",
  //     price: 0,
  //     quantity: 1,
  //     size: "",
  //     image: "",
  //   },
  // });
  // const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("XS");

  // Fetch the specific product using the ID
  useEffect(() => {
    const fetchProduct = async () => {
      await fetchSingleProduct(_id);
      // setProduct(filteredProduct);
    };
    fetchProduct();
  }, [_id, fetchSingleProduct]);

  const addtoCart = async (e) => {
    e.preventDefault();
    const createCart = async () => {
      if (!products || !products.images) {
        console.log("Product data is not fully loaded yet");
        return;
      }
      // setNewCartItem({
      //   userId: "user123",
      //   product: {
      //     productId: products._id,
      //     name: products.name,
      //     category: products.category,
      //     price: products.price,
      //     quantity: quantity,
      //     size: size,
      //     image: products.images[0],
      //   },
      // });

      const cartItem = {
        userId: "user123",
        product: {
          productId: products._id,
          name: products.name,
          category: products.category,
          price: products.price,
          quantity: quantity,
          size: size,
          image: products.images[0],
        },
      };
      await createCartItem(cartItem);

      console.log("New Cart Item:", cartItem);
      //call createCartItem directly with the newCartItem object
      //await createCartItem(newCartItem);
      //await createCartItem();
    };
    createCart();
  };

  const decrementInput = () => {
    const currentValue = parseInt(quantity, 10);
    if (currentValue > 1) {
      setQuantity(currentValue - 1);
    }
  };

  const incrementInput = () => {
    const currentValue = parseInt(quantity, 10);
    if (currentValue < 10) {
      setQuantity(currentValue + 1);
    }
  };

  //Prevent page rendering before products is fully loaded (Due to the async nature)
  if (!products || !products.images) {
    return <p className="text-center m-auto">Loading...</p>; // Handle loading state
  }

  return (
    <div className="flex flex-row mt-5 ml-5 gap-1">
      <div className="w-[50%] h-96 overflow-hidden object-cover ">
        {products.images[0] ? (
          <img src={products.images[0]} alt="Product" />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className="ml-5 w-[50%] bg-white-100">
        <h1 className="text-2xl mb-10">
          <strong>{products.name}</strong>
        </h1>
        <p className="mb-3">RM{products.price}</p>
        Sizes
        <select
          className="border ml-2 mb-3 w-20 text-center"
          name=""
          id=""
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          {products.sizes && products.sizes.length > 0 ? (
            products.sizes.map((sz) => (
              <option value={sz} key={sz}>
                {sz}
              </option>
            ))
          ) : (
            <option value="">No sizes available</option>
          )}
        </select>
        <div className="relative flex flex-row gap-2">
          <div class="relative flex items-center w-[20%]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              class="bg-gray dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-8   focus:outline-none"
              onClick={decrementInput}
            >
              <svg
                class="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              className=" h-8 text-center text-sm    w-full  border "
              placeholder={quantity}
              min={1}
              max={10}
              value={quantity}
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-8  focus:outline-none"
              onClick={incrementInput}
            >
              <svg
                class="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <button
            className="dark:bg-gray-700 p-2 text-white rounded-md hover:bg-gray-600"
            onClick={(e) => addtoCart(e)}
          >
            Add to Cart
          </button>
        </div>
        <p className="mt-10">{products.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
