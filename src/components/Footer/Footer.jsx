import React, { useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsLinkedin,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div>
        <div className="bg-primaryDark grid sm:grid-cols-2 lg:grid-cols-3 px-12 py-2 text-base text-white">
          <div>
            <h4 className="underline underline-offset-8">FOLLOW US ON</h4>
            <div className="flex mt-4">
              <a href="www.facebook.com" className="mr-2">
                <BsFacebook size={25} />
              </a>
              <a href="www.instagram.com" className="mr-2">
                <BsInstagram size={25} />
              </a>
              <a href="www.pinterest.com" className="mr-2">
                <BsPinterest size={25} />
              </a>
              <a href="www.twitter.com" className="mr-2">
                <BsTwitter size={25} />
              </a>
              <a href="www.linkedin.com">
                <BsLinkedin size={25} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="underline underline-offset-8">CONTACT DETAILS</h4>
            <div className="flex mt-3">
              <BsFillGeoAltFill className="mt-1" />
              <div className="ml-2">
                Address-Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </div>
            <div className="flex mt-3">
              <BsFillTelephoneFill className="mt-1" />
              <div className="ml-2">+91 XXXXX XXXXX</div>
            </div>
            <div className="flex mt-3.5">
              <BsEnvelopeFill className="mt-1" />
              <div className="ml-2">abcdefghijklmnop@gmail.com</div>
            </div>
          </div>

          <div className="lg:mr-12">
            <div className="lg:float-right">
              <h4 className="underline underline-offset-8">OUR COMPANY</h4>
              <ul>
                <li>
                  <div className="my-2">
                    <Link to="/About"> About Us</Link>
                  </div>
                </li>
                <li>
                  <div className="my-2">
                    <Link to="/FAQs">FAQs</Link>
                  </div>
                </li>
                <li>
                  <div className="my-2">
                    <Link to="/ReturnPolicy"> Return and Refund Policy</Link>
                  </div>
                </li>
                <li>
                  <div className="my-2">
                    <Link to="/SmileStories"> Smile Stories</Link>
                  </div>
                </li>
                <li>
                  <div className="my-2">
                    <Link to="/Blogs"> Blogs</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:invisible">
            <div className="underline underline-offset-8 mt-6">
              100% secure payments
            </div>

            <div className="flex m-1.5">
              <img
                className="rounded-md w-10 m-0.5"
                src="src/assets/mastercard.png"
                alt=""
              />
              {/* Add more payment icons here */}
            </div>
          </div>

          <div className="sm:invisible lg:visible">
            <div className="underline underline-offset-8 mt-1">
              100% secure payments
            </div>

            <div className="flex m-1.5">
              <img
                className="rounded-md w-10 m-0.5"
                src="src/assets/mastercard.png"
                alt=""
              />
              {/* Add more payment icons here */}
            </div>
          </div>

          <div className="sm:invisible lg:visible">
            <div className="lg:float-right">
              <h4 className="underline underline-offset-8">KEEP UP TO DATE</h4>

              <form>
                <label className="text-white">
                  <input
                    className="h-6 w-40 bg-white rounded-lg mt-3 p-2"
                    type="email"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <button
                  className="bg-primaryDark rounded-lg -m-7 text-white w-32"
                  type="submit"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          <h4 className="lg:invisible underline underline-offset-8 -mt-16">
            KEEP UP TO DATE
          </h4>

          <form className="lg:invisible -mt-16">
            <label className="text-white">
              <input
                className="h-6 w-40 bg-white rounded-lg mt-3 p-2"
                type="email"
                placeholder="Enter Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button
              className="bg-primaryDark rounded-lg -m-7 text-white w-32"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div className="bg-white">
          <div className="text-center font-semibold">
            2023 SAAM, All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;