import { faCircle } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect } from "react";
import { FaCartShopping, FaHandSparkles } from "react-icons/fa6";
import avatarImg from "../assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cart";
import "../index.css";
import "@fontsource/poppins"; // Import Poppins font
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const cartQuantity = useCartStore((state) => state.cartQuantity());

  useEffect(() => {
    const cartItems = fetchCartItems(); // Fetch cart items on component mount
  }, [fetchCartItems]);
  // console.log("Cart Quantity:", cartQuantity);
  //const cartQuantity = useCartStore((state) => state.cartQuantity());
  //const cartItemsNumber = 1; // Replace with the actual number of cart items
  const handlePaths = ({ category }) => {
    navigate(`/prod/${category}`);
  };

  return (
    <nav className="p-3 font-sans bg-blue-300 flex flex-row justify-between h-12">
      <div className="navbar-left">
        <h1
          className="ml-2 pl-3 text-[#966AB6]  "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <a href="/" className="flex flex-row gap-2 align-center">
            <FaHandSparkles /> BerryFancyNails
          </a>
        </h1>
      </div>

      <div className="flex flex-row navbar-right   w-2/7">
        <ul className="navlinks flex flex-row">
          <li className="group mr-3 h-12 navbar-btn">
            <a className="hover:underline">ALL NAILS</a>

            <ul className="dropdown hidden group-focus-within:block group-hover:block absolute left-0 w-full border border-gray-200 rounded-md mt-3  bg-white p-10 z-10 opacity-[0.85] ">
              <div className="flex flex-row">
                <ul className="flex flex-col space-y-2">
                  <p className="font-bold text-[#966AB6] mb-4">SHOP BY</p>
                  <li className="ml-2">
                    <a>Shop All</a>
                  </li>
                  <li className="ml-2">
                    <button
                      onClick={() => navigate(`prod/topselling`)}
                      className="hover:underline"
                    >
                      Top Selling
                    </button>
                  </li>
                  <li className="ml-2">
                    <a>Newly Arrived</a>
                  </li>
                </ul>
                <div className="ml-20">
                  <p className="font-bold text-[#966AB6] mb-5">BY STYLE</p>
                  <ul className="flex flex-row ml-2">
                    <div className="space-y-3">
                      <li>
                        <button
                          onClick={() => handlePaths({ category: "almond" })}
                          className="hover:underline"
                        >
                          Almond
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handlePaths({ category: "round" })}
                          className="hover:underline"
                        >
                          Round
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handlePaths({ category: "coffin" })}
                          className="hover:underline"
                        >
                          Coffin
                        </button>
                      </li>
                    </div>
                    <div className="space-y-3 ml-5">
                      <li>
                        <button
                          onClick={() => handlePaths({ category: "button" })}
                          className="hover:underline"
                        >
                          Button
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handlePaths({ category: "square" })}
                          className="hover:underline"
                        >
                          Square
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handlePaths({ category: "oval" })}
                          className="hover:underline"
                        >
                          Oval
                        </button>
                      </li>
                    </div>
                    <div className=" space-y-3 ml-5">
                      <li>
                        <button
                          onClick={() => handlePaths({ category: "stiletto" })}
                          className="hover:underline"
                        >
                          Stiletto
                        </button>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li className="mr-3">ABOUT US</li>
          <li className="mr-3">
            <Link to="/#howto-section">HOW TO</Link>
          </li>
          <li className="mr-3">GALLERY</li>
          <li className="mr-3">TESTIMONIALS</li>
        </ul>
        <div className="flex flex-row navbar-profile  space-x-3">
          <img src={avatarImg} alt="" className="w-6 rounded-full" />
          <div>
            <button onClick={() => navigate("/cart")}>
              <FaCartShopping className="text-2xl text-gray-700" />
            </button>
            <span className="relative rounded-full bg-orange-500 text-xs text-white px-1 border border-orange-400 bottom-4">
              {cartQuantity}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
