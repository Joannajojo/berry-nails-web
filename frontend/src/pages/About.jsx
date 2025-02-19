import React from "react";
import ProductHeader from "../components/ProductHeader";
import AboutImg from "../assets/about.jpg";
import About2Img from "../assets/about2.jpg";
const About = () => {
  return (
    <div className="flex-col min-h-screen mb-10">
      <ProductHeader title="About Us" />

      <p className="ml-10 mr-10 text-xl mt-10 text-gray-600">
        Welcome to <strong>Berry Nails</strong>, where beauty meets convenience!
      </p>
      <div className=" flex flex-row justify-center">
        <img
          className="mt-5 opacity-60 w-[50%] h-64 overflow-hidden object-cover"
          src={AboutImg}
          alt=""
        />
        <img
          className="mt-5 opacity-60 w-[50%] h-64 overflow-hidden object-cover"
          src={About2Img}
          alt=""
        />
      </div>
      <p className="ml-10 mr-10 text-xl mt-10 text-gray-600">
        We’re passionate about bringing you premium press-on nails that are not
        only stylish but also designed for everyday comfort and versatility. Our
        mission is simple: to help you express your unique personality with
        stunning, salon-quality nails—without the time, hassle, or expense of
        traditional nail appointments.
      </p>

      <p className="ml-10 mr-10 text-xl mt-10 text-gray-600">
        Each set is crafted with care, offering trendy designs, vibrant colors,
        and durable materials to ensure you look fabulous for any occasion.
        Whether you're going for a minimalist everyday vibe, bold statement
        pieces, or elegant event-ready nails, we've got the perfect fit for you.
      </p>

      <p className="ml-10 mr-10 text-xl mt-10 text-gray-600">
        At Berry Nails, we believe beauty should be accessible and stress-free.
        That's why our press-ons are easy to apply, reusable, and gentle on your
        natural nails. Transform your look in minutes and feel confident
        wherever you go.
      </p>

      <p className="ml-10 mr-10 text-xl mt-10 text-gray-600">
        Thank you for supporting our small business and being part of the Berry
        Nails family. We can’t wait to see how you style your sets—because you
        deserve nails that stand out, just like you do!
      </p>

      <p className="ml-10 mr-10 text-xl mt-10 text-gray-600">
        Stay polished, stay confident.
      </p>
      <div className="mt-5">
        <p className="ml-10">Love, </p>
        <p className="ml-10 font-bold"> The Berry Nails Team</p>
      </div>
    </div>
  );
};

export default About;
