import { faCircle } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import avatarImg from "../assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handlePaths = ({ category }) => {
    navigate(`/prod/${category}`);
  };
  return (
    <nav className="p-3 font-sans bg-blue-300 flex flex-row justify-between h-12">
      <div className="navbar-left">
        <h1 className="ml-2 pl-3 text-[#966AB6] font-medium ">
          <a href="/">BerryFancyNails</a>
        </h1>
      </div>

      <div className="flex flex-row navbar-right mr-5  w-1/4">
        <ul className="navlinks flex flex-row">
          <li className="group mr-3 h-12">
            <a href="#" className="hover:underline">
              ALL NAILS
            </a>

            <ul className="dropdown hidden group-focus-within:block group-hover:block absolute left-0 w-full border border-gray-200 rounded-md mt-3  bg-white p-10 z-10 opacity-[0.85] ">
              <div className="flex flex-row">
                <ul className="flex flex-col space-y-3">
                  <p className="font-bold text-gray-700 mb-4">SHOP BY</p>
                  <li className="ml-2">
                    <a>Shop All</a>
                  </li>
                  <li className="ml-2">
                    <a>Top Selling</a>
                  </li>
                  <li className="ml-2">
                    <a>Newly Arrived</a>
                  </li>
                </ul>
                <div className="ml-20">
                  <p className="font-bold text-gray-700 mb-5">BY STYLE</p>
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
                      <li>Round</li>
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
                      <li>Button</li>
                      <li>Square</li>
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
                      <li>Stiletto</li>
                    </div>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li className="mr-3">CONTACT US</li>
        </ul>
        <div className="flex flex-row navbar-profile  space-x-3">
          <img src={avatarImg} alt="" className="w-6 rounded-full" />
          <FaCartShopping className="text-2xl text-gray-700" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
