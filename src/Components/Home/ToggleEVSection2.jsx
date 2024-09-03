import React, { useState } from "react";
import lineBackground from "../../Images/lineBackground.png";
import eclips from "../../Images/EllipseSection2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Scooter from "./ToggleEV/Scooter";
import Bikes from "./ToggleEV/Bikes";

const ToggleEVSection2 = () => {
  const [vehicle, setVehicle] = useState("Scooter");
  return (
    <div className=" flex flex-col lg:flex-row mb-4 p-0 lg:py-2">
      {/* line background section  */}
      <div
        style={{ backgroundImage: `url(${lineBackground})` }}
        className={` w-full lg:w-[55%] relative bg-cover bg-no-repeat `}
      >
        <img
          className=" w-[90%] mx-auto lg:mt-16 lg:w-[30vw] p-4"
          src={eclips}
          alt="eclipse"
        />
        <div className=" flex items-center justify-center flex-col gap-4  absolute left-2 lg:left-[12rem] top-[3rem] lg:top-[11rem]">
          <h1 className=" text-2xl lg:text-4xl font-bold w-[60%] ">
            Electrify your life with{" "}
            <span className=" text-customGreen"> Citizen EV!</span>
          </h1>
          <Link
            to="/products"
            className="flex w-[70%] lg:w-[40%]  justify-center group items-center gap-4 transition-all duration-200 rounded-md text-white font-bold py-4 bg-customGrey hover:bg-slate-800 "
          >
            Browse Products{" "}
            <FaArrowRightLong className=" group-hover:translate-x-4 transition-all duration-300" />{" "}
          </Link>
        </div>
      </div>
      {/* toggle ev section  */}
      <div className=" w-[98%] lg:w-[45%] mx-auto flex item-center flex-col">
        {/* toggler  */}
        <div className="flex items-center mx-auto w-[90%] lg:w-[30%] bg-slate-200 rounded-full">
          <p
            onClick={() => setVehicle("Scooter")}
            className={`p-2 w-[50%] px-6 rounded-full cursor-pointer transition-all duration-500 ease-in-out 
                    ${
                      vehicle === "Scooter"
                        ? "bg-customGrey text-slate-100"
                        : "text-customGrey bg-slate-200"
                    }`}
          >
            Scooties
          </p>
          <p
            onClick={() => setVehicle("Bikes")}
            className={`p-2 px-6 w-[50%] rounded-full cursor-pointer transition-all duration-500 ease-in-out 
                    ${
                      vehicle === "Bikes"
                        ? "bg-customGrey text-slate-100"
                        : "text-customGrey bg-slate-200"
                    }`}
          >
            Bikes
          </p>
        </div>
        {/* <div className=" w-[80%]"></div> */}
        {vehicle === "Scooter" ? <Scooter /> : <Bikes />}
      </div>
    </div>
  );
};

export default ToggleEVSection2;
