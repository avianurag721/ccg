import React, { useEffect, useState } from "react";
import Slide1 from "../../Images/s1.png";
import Slide2 from "../../Images/s2.png";
import Slide3 from "../../Images/s3.png";
import Slide4 from "../../Images/Slider/Slide1.jpg";
import Slide5 from "../../Images/Slider/slide2.jpg";
import Slide6 from "../../Images/Slider/slide3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

const images = [Slide1, Slide2, Slide3,Slide4,Slide5,Slide6];

const MainCarousel = () => {
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
      <div className="relative  h-[64vh] lg:h-[92vh] ">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              className="w-full h-full object-cover"
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
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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

      <div className=" flex gap-2 lg:gap-8 absolute top-[82%] lg:top-[80%] right-[15%]  lg:right-[40%]">
        <Link
          to="/contact-us"
          className=" bg-black text-center items-center gap-1  text-white py-2 px-4 rounded-md flex jic"
        >
          Get in touch{" "} <span className="bg-green-500 rounded-full  h-2 w-2"></span>
        </Link>
        <Link
          to="/get-in-touch"
          className=" bg-customGreen text-center items-center gap-1 flex justify-center text-white py-2 px-2 rounded-md"
        >
          Book Test Ride{" "} <span><FaArrowRightLong size={12} color="white"/></span>
        </Link>
       
      </div>
    </div>
  );
};
export default MainCarousel;
