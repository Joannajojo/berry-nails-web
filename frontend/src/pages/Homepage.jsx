import React from "react";
import Slideshow from "../components/Slideshow";
import handImg1 from "../assets/Untitled.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons"; // Regular icon
import { faHeart } from "@fortawesome/free-regular-svg-icons"; // Regular icon
import { faCalendar } from "@fortawesome/free-regular-svg-icons"; // Regular icon
const Homepage = () => {
  let slides = [
    "https://kaneezi.com/wp-content/uploads/2024/06/steptodown.com134235.jpg",
    "https://www.nailberry.co.uk/cdn/shop/articles/Banner.jpg?v=1686925266",
    "https://media.glamour.com/photos/66c64db0174b6a2c139b5f41/3:2/w_2160,h_1440,c_limit/MixCollage-21-Aug-2024-04-27-PM-2211.jpg",
    handImg1,
  ];
  return (
    <div className="">
      {
        /* <Slideshow slides={slides} /> */

        // Homepage banner
        <div className="banner w-full flex flex-row m-auto">
          <div className="banner-left w-[40%]">
            <img src="https://kaneezi.com/wp-content/uploads/2024/06/steptodown.com134235.jpg" />
          </div>
          <div
            className={`banner-right bg-customBeige w-[60%] flex flex-col justify-center text-center`}
          >
            <p className="text-3xl font-bold mb-5">Designed for all</p>
            <button className="text-base bg-customHomeButtonColor w-1/4 p-4 mx-auto rounded-md font-bold hover:bg-customHomeButtonHoverColor">
              Shop Now
            </button>
          </div>
        </div>
      }

      <div className="flex flex-row justify-center text-center gap-20 mt-20 mb-20 text-2xl space-x-6">
        <div>
          <FontAwesomeIcon icon={faClock} size="4x" className=" mb-5 m-auto" />
          <p>FAST TO APPLY</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} size="4x" className=" mb-5" />
          <p>CUSTOMIZABLE</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendar} size="4x" className="mb-5" />
          <p>LONG LASTING</p>
        </div>
      </div>

      <div>
        <h1 className="text-center text-4xl">TOP SELLING NAILS</h1>
      </div>
    </div>
  );
};

export default Homepage;
