// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import Slide1 from "../../Images/latest.png";
import Slide2 from "../../Images/Slider/slide2.jpg";
import Slide3 from "../../Images/Slider/slide3.jpg";
import { BiArrowToRight } from "react-icons/bi";

const images = [Slide1, Slide2, Slide3];

const Poster1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 1500); // Change card every 1.5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div id="default-carousel" className="relative w-full overflow-hidden">
      <div className="relative  h-[64vh] lg:h-[86vh] ">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              className="w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden lg:block"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden lg:block"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      <div className=" flex flex-col gap-2 lg:gap-8 absolute top-[40%] lg:top-[40%] right-[20%]  lg:right-[65%] md:right-[60%] md:top-[50%]">
        <div className="flex lg:w-[15rem] w-[8rem] md:w-[20rem] items-center lg:gap-8 gap-4">
          <img src={Logo} width={170} alt="ccg" />
          <p className="lg:text-m text-sm font-mono text-white md:text-lg">
            Scooties & Bikes
          </p>
        </div>
        <div className="flex ml-6 lg:ml-8 text-white flex-col gap-2 justify-around ">
          <h1 className=" text-4xl font-serif">Up to 10% off</h1>
          <h1 className=" text-4xl font-serif">Use Code EV10</h1>
          <Link className="lg:mt-8 mt-10 ml-2 md:w-[10rem] flex w-[10rem] md:text-xl pb-2 items-center gap-2 border-b">
            <p>Shop Now</p> <BiArrowToRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Poster1;
