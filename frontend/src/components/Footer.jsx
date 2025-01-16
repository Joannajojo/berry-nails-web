import { faClock, faMessage } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {
  FaClock,
  FaFacebook,
  FaInstagram,
  FaMessage,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import "../index.css";

const Footer = () => {
  return (
    <div className=" flex p-10 font-sans bg-blue-300 grid grid-cols-3 gap-5 justify-between footer-text  h-auto w-full m-0  align-center">
      <div className="ml-10">
        <p className="footer-sub-title mb-5">
          <strong>SUPPORT</strong>
        </p>
        <ul className="space-y-3">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="">
        <p className="footer-sub-title mb-5">
          <strong>SOCIALS</strong>
        </p>
        <ul className="space-y-3">
          <li>
            <span className="flex flex-row gap-2 items-center   ">
              <FaFacebook />
              BerryFancyNails
            </span>
          </li>
          <li>
            <span className="flex flex-row gap-2 items-center  ">
              <FaYoutube />
              BerryFancyNails Official
            </span>
          </li>
          <li>
            <span className="flex flex-row gap-2 items-center ">
              <FaInstagram />
              berryfancy_nails
            </span>
          </li>
        </ul>
      </div>

      <div className="">
        <p className="footer-sub-title mb-5">
          <strong>CONTACT US</strong>
        </p>
        <ul className="space-y-3">
          <li>
            <span className="flex flex-row gap-2 items-center   ">
              <FaClock /> Monday to Friday: 9am to 5pm
            </span>
          </li>
          <li>
            <span className="flex flex-row gap-2 items-center">
              <FaPhone />
              +1800 4763 8423
            </span>
          </li>
          <li>
            <span className="flex flex-row gap-2 items-center">
              <FaMessage />
              berryfancynails_admin.mail.com
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
