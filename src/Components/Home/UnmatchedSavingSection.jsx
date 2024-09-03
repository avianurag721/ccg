import React, { useState } from "react";
import scooty from "../../Images/Scooty/scooty.png";
// import { Carousel } from "flowbite-react";

const UnmatchedSavingSection = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className=" flex flex-col justify-center items-center w-full">
      <div className=" w-[90%]">
        {/* price filter and Image  section  */}
        <div className=" w-full flex border-b border-slate-400 my-6 flex-col lg:flex-row items-start justify-between ">
          {/* filter  */}
          <div className=" w-full lg:w-[45%] flex px-2 lg:px-16 gap-8 flex-col">
            <div className=" flex flex-col items-start">
              <h1 className=" text-lg text-black font-bold">
                Unmatched Savings
              </h1>
              <p className=" text-slate-400">
                Invest in an EV, reap the returns!
              </p>
            </div>
            <div className=" w-full">
              <p className=" text-start text-sm text-slate-400">
                Daily Distance: {value}
              </p>
              <input
                type="range"
                className="custom-range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                style={{ "--slider-value": `${value}%` }}
              />
              <div className=" flex gap-[5rem] justify-between">
                <div className=" flex flex-col items-start">
                  <p className=" text-start text-sm text-slate-400">15km</p>
                  <p className=" text-start text-sm text-slate-400">
                    Monthly Saving
                  </p>
                  <p className=" font-bold text-lg text-customGreen">3,528</p>
                </div>
                <div className="  flex flex-col items-end">
                  <p className=" text-start text-sm text-slate-400">10km</p>
                  <p className=" text-start text-sm text-slate-400">
                    Annual Saving
                  </p>
                  <p className=" font-bold text-lg text-customGreen">42,336</p>
                </div>
              </div>
            </div>
          </div>
          {/* image  */}
          <div className=" flex justify-center items-center w-full lg:w-[50%]">
            <img src={scooty} alt="scooty" className=" " />
          </div>
        </div>
        {/* banner slider section  */}
        {/* <div className="h-56 my-4  sm:h-64 xl:h-80 2xl:h-96">
          <Carousel className="rounded-none">
            <div className="flex   h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 1
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 2
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
          </Carousel>
        </div> */}
      </div>
    </div>
  );
};

export default UnmatchedSavingSection;
