import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookYourRide = () => {
  return (
    <div className=" w-full flex justify-center bg-customGreen py-2 lg:py-4">
      <div className="flex justify-between w-[95%]">
        <h1 className="  text-white text-lg lg:text-2xl font-bold">Book Your Test Ride! Its Free.</h1>
        <Link to="/get-in-touch" className="flex w-[45%] lg:w-auto  bg-white rounded-md p-1 lg:px-6 py-2 gap-2 group text-black  justify-center items-center">
          <p className=" " >Test Ride </p> <FaArrowRight className=" group-hover:translate-x-4 transition-all duration-200" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default BookYourRide;
     