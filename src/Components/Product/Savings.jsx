import { useState, useRef, useEffect } from "react";
import scooty from "../../Images/Scooty/scooty.png";
import { MdCurrencyRupee } from "react-icons/md";
import { endpoints } from "../../Services/apis";
import { apiConnector } from "../../Services/connector";
// import BGBlack from "../../Images/UrbanMobility/BGBlack.png";
// import { ImGithub } from "react-icons/im";

// debounce for slider
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const Savings = ({ img, pid, exPrice, ePrice }) => {
  const [distance, setDistance] = useState(50);
  const [monthlySaving, setmonthlySaving] = useState(50);
  const [annualSaving, setAnnualSaving] = useState(50);
  // console.log("imggg",img)

  // use effect for slider
  useEffect(() => {
    debouncedApiCall(distance);
    // eslint-disable-next-line
  }, [distance]);

  const { SAVING } = endpoints;

  const handleSliderChange = (e) => {
    setDistance(Number(e.target.value));
  };

  // debounced api call
  const debouncedApiCall = useRef(
    debounce(async (newValue) => {
      try {
        console.log(`API called with value: ${newValue}`);
        const data = await apiConnector("GET", SAVING(newValue, pid));
        console.log(data.data.data.annualSavings);
        console.log(data.data.data.monthlySavings);
        // console.log(data.data.monthlySavings);
        setAnnualSaving(data.data.data.annualSavings);
        setmonthlySaving(data.data.data.monthlySavings);
      } catch (error) {
        console.error(error);
      }
    }, 1000)
  ).current;

  return (
    <div className=" flex w-full items-center flex-col">
      <div className=" w-full border-b border-black lg:w-[70%] flex flex-col lg:flex-row items-center p-6 justify-between max-w-[90%]">
        {/* Slider */}
        <div className=" w-full lg:w-[40%] ">
          <div className="flex justify-between mb-2 text-lg">
            <span>Daily Distance: {distance}km</span>
          </div>

          <div className="relative w-full">
            <input
              type="range"
              min="15"
              max="100"
              value={distance}
              onChange={handleSliderChange}
              className="absolute w-full h-12 opacity-0 cursor-pointer"
              style={{ zIndex: 20 }}
            />
            <div
              className="absolute h-6 bg-green-400 rounded-md"
              style={{
                width: `${((distance - 15) / (100 - 15)) * 100}%`,
                zIndex: 2,
              }}
            />
            <div
              className="absolute w-full h-6 bg-gray-300 rounded-md"
              style={{ zIndex: 1 }}
            />
            <div
              className="absolute h-8 w-8 bg-white border border-gray-400 rounded-full cursor-pointer"
              style={{
                left: `calc(${((distance - 15) / (100 - 15)) * 100}% - 18px)`,
                top: "-4px",
                zIndex: 4,
              }}
            />
          </div>

          <div className="flex justify-between mt-8">
            <span>15km</span>
            <span>100km</span>
          </div>

          <div className="flex justify-between mt-4 text-lg font-semibold">
            <div>
              <span className="text-sm lg:text-lg font-sans">
                Monthly Savings
              </span>
              <div className="text-green-400 text-md lg:text-lg">
                ₹{monthlySaving}
              </div>
            </div>
            <div>
              <span className="text-sm lg:text-lg">Annual Savings</span>
              <div className="text-green-400 text-md lg:text-lg">
                ₹{annualSaving}
              </div>
            </div>
          </div>
        </div>
        {/* Scooty image */}
        <div className="">
          <img
            src={img || scooty}
            height={400}
            width={400}
            className="w-50 h-50"
            alt=""
          />
        </div>
      </div>

      {/* Need to be responsive */}

      <div className=" w-full lg:w-[70%] flex justify-between">
        <div className="flex text-m justify-evenly p-4 sm:w-[50%] lg:w-[25%]">
          <p>Ex-showroom MRP =</p>

          <p className="flex text-green-400">
            <MdCurrencyRupee size={25} className="" />
            {exPrice || ePrice}
          </p>
        </div>
        <div className="flex text-m  justify-evenly p-4 sm:w-[40%] lg:w-[20%]">
          <p>Effective cost =</p>
          <p className="flex text-green-400">
            <MdCurrencyRupee size={25} className="" />
            {ePrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Savings;
