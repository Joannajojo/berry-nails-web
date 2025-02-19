import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Slideshow = ({ slides }) => {
  let [current, setCurrent] = useState(0);
  // if current slide is first img, when click to previous slide, it will go to last img
  //else set slide back 1 index
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  // if current slide is last img, when click to next slide, it will set to first img
  //else set slide next 1 index
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="m-auto pt-11  overflow-hidden relative">
      {/* style is to move an element left by its full width, effectively shifting it off-screen. */}
      <div
        className={`w-[90%] h-64 flex justify-center object-cover transition ease-out duration-40 `}
        // style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="">
        <p>Designed for you</p>
        <button>Shop</button>
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex">
        <button onClick={previousSlide}>
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
