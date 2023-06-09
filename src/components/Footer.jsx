import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import cloud1 from '../assets/234 cloud logo.png';

const Footer = () => {
  return (
    <footer class="relative bg-gray-300 pt-8 pb-6">
      <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl font-semibold">Follow us on social media</h4>
            <h5 class="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div class="mt-6">
              <button
                class="text-[#adf802] bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <p>
                  <FaTwitter />
                </p>
              </button>
              <a
                href="https://instagram.com/sweatzonepr?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <button
                  class="text-[#adf802] bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <p>
                    <FaFacebookF />
                  </p>
                </button>
              </a>

              <a href="https://instagram.com/empirefitnesspr?igshid=YmMyMTA2M2Y=">
                <button
                  class="text-[#adf802] bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <p>
                    <FaInstagram />
                  </p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-400" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-gray-600 font-semibold py-1 flex justify-center items-center">
              Website Service & Branding By
              <img src={cloud1} alt="" class="h-12 ml-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
