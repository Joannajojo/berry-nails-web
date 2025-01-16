import React, { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import handImg1 from "../assets/Untitled.png";
import {
  FaArrowRight,
  FaClock,
  FaHeart,
  FaInstagram,
  FaQuoteLeft,
  FaQuoteRight,
  FaRegCalendarCheck,
  FaWandSparkles,
} from "react-icons/fa6";
import { useOrderStore } from "../store/order";
import DisplayCard from "../components/DisplayCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import nailSizeImg from "../assets/measure_nail.jpg";
import nailKitImg from "../assets/nail_kit.jpg";
import ReactPlayer from "react-player";
const Homepage = () => {
  const navigate = useNavigate();

  let slides = [
    "https://kaneezi.com/wp-content/uploads/2024/06/steptodown.com134235.jpg",
    "https://www.nailberry.co.uk/cdn/shop/articles/Banner.jpg?v=1686925266",
    "https://media.glamour.com/photos/66c64db0174b6a2c139b5f41/3:2/w_2160,h_1440,c_limit/MixCollage-21-Aug-2024-04-27-PM-2211.jpg",
    handImg1,
  ];

  const { fetchMostOrdered, topSelling } = useOrderStore();
  useEffect(() => {
    const fetchTopSelling = async () => {
      await fetchMostOrdered(); // Fetch products for the specific category
    };
    fetchTopSelling();
  }, []);

  if (!topSelling) return "<p className='text-center'>Loading...</p>";
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
            <p className="text-3xl font-bold mb-5 homepage-banner">
              Designed for all
            </p>
            <button className="text-base bg-customHomeButtonColor w-1/4 p-4 mx-auto rounded-md font-bold hover:bg-customHomeButtonHoverColor">
              Shop Now
            </button>
          </div>
        </div>
      }

      <div className="grid grid-cols-3 text-center gap-5 mt-20 mb-20 text-2xl space-x-6 homepage-section">
        <div>
          <FaClock className=" mb-5 m-auto text-8xl" />
          <p>FAST TO APPLY</p>
        </div>
        <div>
          <FaHeart className=" mb-5 m-auto text-8xl" />
          <p>CUSTOMIZABLE</p>
        </div>
        <div>
          <FaRegCalendarCheck className="mb-5 m-auto text-8xl" />
          <p>LONG LASTING</p>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-center text-4xl mt-2 homepage-section">
          TOP SELLING
        </h1>
        <div className="p-4 grid grid-cols-3 gap-2 pt-10">
          {topSelling.length > 0 ? (
            topSelling
              .slice(0, 3)
              .map((item) => <DisplayCard key={item._id} item={item.details} />)
          ) : (
            <p className="text-center m-5">No results found.</p>
          )}
        </div>
        <div className=" flex justify-center pr-5 pb-5">
          <button
            className="text-center bg-[#A6C5F4] hover:bg-[#4d8df0] text-white font-bold py-2 px-4 rounded ml-5 "
            onClick={() => navigate("prod/topselling")}
          >
            <span className="flex flex-row items-center gap-2">
              View All <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      <section id="howto-section" className="mb-10 w-[45%] m-auto">
        <h1 className="text-center text-4xl mt-10 homepage-section">HOW TO</h1>
        <div className="p-5  space-y-5 ">
          <h1 className="text-center font-bold m-5">
            <i>Measure your size: </i>
          </h1>
          <img src={nailSizeImg} className="m-auto h-64" />
          <p>
            1. Measure your nail bed width from side to side using a measurement
            tape.
          </p>
          <p>2. Refer width to the size chart provided</p>
          <p>3. Jot down the category your nails generally fall under </p>
        </div>

        <div className="p-5  space-y-5">
          <h1 className="font-bold text-center">
            <i>Apply:</i>
          </h1>
          <img src={nailKitImg} alt="" />
          <p>1. Check to see which nail fits your size</p>
          <p>2. Push down cuticles gently with the wooden cuticle pusher</p>
          <p>
            3. Prep your nails by trimming, filing and buffing them with our
            provided mini nail file
          </p>
          <p>
            4. Rub each nails with the provided alcohol pad to remove any dust.{" "}
          </p>
          <p>5. Apply glue to the back of the nail</p>
          <p>6. Stick the nail at 45 degree angle and gently push it down</p>
          <p>
            7. The nail should take less than 20 mins to dry. Refrain from
            washing your hands during this time
          </p>
        </div>
      </section>
      <div>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=8DHP5XZPSjc"}
          controls={false}
          className="m-auto text-center h-80 mt-10"
        />
      </div>

      <div id="gallery-section">
        <h1 className="text-center text-4xl mt-10 homepage-section mb-5 ">
          <span className="flex flex-row items-center gap-2 justify-center">
            THEY NAILED IT <FaWandSparkles />
          </span>
        </h1>
        <p className=" mb-5">
          <span className="flex flex-row justify-center items-center gap-2">
            <FaInstagram />
            Our favourite looks on #nailstagram with BerryFancyNails press-ons!
          </span>
        </p>
        <div className="grid grid-cols-3 gap-5 p-10">
          <img
            src="https://images.unsplash.com/photo-1563730049333-31f8f9161f4d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
          />
          <img
            src="https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
          />
          <img
            src="https://images.unsplash.com/photo-1502949298791-393048291bb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5haWxzfGVufDB8fDB8fHww"
            alt=""
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
          />
          <img
            src="https://images.unsplash.com/photo-1559006045-d34d415b2cff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmFpbHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
          />
          <img
            src="https://images.unsplash.com/photo-1493799817216-4b57dda4229f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
          />
          <img
            src="https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
          />
          <img
            src="https://images.unsplash.com/photo-1584566006505-8923576e70d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5haWx8ZW58MHx8MHx8fDA%3D.jpg"
            alt=""
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
          />
          <img
            src="https://images.unsplash.com/photo-1534131270927-b0704a572b6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5haWxzfGVufDB8fDB8fHww"
            alt=""
            className="w-full object-cover h-64 overflow-hidden hover:shadow-2xl hover:opacity-70 hover:shadow-customBeige"
          />
        </div>
      </div>

      <div id="testimonial-section" className="m-10 p-5">
        <h1 className="text-center text-4xl mt-10 mb-10 homepage-section">
          TESTIMONIALS
        </h1>

        <div className="grid grid-cols-3 gap-10 mt-10">
          <div>
            <span className="flex flex-row gap-2">
              <FaQuoteLeft /> Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </span>
            <div className="text-right">
              <p className="font-bold mt-10 text-sm">Loraine Johnson</p>
              <p className="text-xs">Customer</p>
            </div>
          </div>
          <div>
            <span className="flex flex-row gap-2">
              <FaQuoteLeft /> Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </span>
            <div className="text-right">
              <p className="font-bold mt-10 text-sm">Jennie Dakota</p>
              <p className="text-xs">Customer</p>
            </div>
          </div>

          <div>
            <span className="flex flex-row gap-2">
              <FaQuoteLeft /> Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </span>
            <div className="text-right">
              <p className="font-bold mt-10 text-sm">Talitha Benjamin</p>
              <p className="text-xs">Customer</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
