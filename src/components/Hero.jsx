import React from 'react';
import girl from '../assets/girl.png';

const Hero = () => {
  return (
    <div className="bg-black  text-white ">
      <div className=" relative">
        <div className=" max-w-[100%]  w-full h-screen mx-auto text-center flex flex-col justify-center ">
          <img
            className="w-full h-full object-cover"
            src={girl}
            alt="20230430_192918"
          />
        </div>
        <div className=" max-w-[100%] w-full h-screen mx-auto text-center flex flex-col justify-center absolute z-10 top-0 bg-black bg-opacity-50">
          <p className="text-[#adf802] font-bold  uppercase">
            join empire fitness today!.
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2 ">
            Grow with data.
          </h1>
          <div className="md:texl-5xl sm-text-4xl text-xl font-bold flex gap-1 justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text=xl font-bold">
              Top-of-the-line equipment & gym culture
            </p>
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-400">
            Download our complete brochure to get started today!.
          </p>

          <button className="bg-[#adf802] w-[9rem] rounded-md font-medium my-6 mx-auto py-3 hover:bg-transparent hover:border-[#adf802]hover:border hover:text-[#adf802] text-black ">
            DOWNlOAD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
