import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import { useParams } from "react-router-dom";
import FAQ from "../Common/FAQ";
import { IoIosSpeedometer } from "react-icons/io";
import { TiBatteryCharge } from "react-icons/ti";
import { GiCarWheel } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import Savings from "../../Components/Product/Savings";
import Compare from "../../Components/Product/Compare";
import latest from "../../Images/latest.png";

const { GET_PRODUCT } = endpoints;

const ProductDescription = () => {
  const { id } = useParams();
  const [scooty, setScooty] = useState(null);
  const [loading, setLoading] = useState(false);
  //   console.log("id", id);
  useEffect(() => {
    const fetchScooty = async () => {
      try {
        setLoading(true);
        const response = await apiConnector("GET", GET_PRODUCT(id));
        setScooty(response?.data?.data);
        console.log("product fetched", response?.data?.data);
      } catch (error) {
        console.error("Error fetching scooty details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchScooty();
  }, [id]);

  
  if (loading) return <p>Loading...</p>;
  if (!scooty) return <p>No details available</p>;
  return (
    <>
      <div className="bg-gray-200 flex flex-col  justify-center items-center ">
        <img
          // src={scooty.images[0]}
          src={latest}
          alt={scooty.name}
          className=" w-full h-[64vh] lg:h-[90vh]"
        />
        <div className=" flex flex-col my-2 lg:my-8 items-center w-[90%]  ">
          <h1 className=" text-3xl font-serif sm:my-2"> Top Features</h1>
          <div className=" w-full flex justify-around sm:gap-4 flex-wrap">
            <div className=" p-2 rounded w-[45%] lg:w-[22%] flex flex-col justify-center shadow-md items-center">
              <IoIosSpeedometer className=" text-[6rem] lg:text-[10rem] text-customGreen" />
              <h1 className=" text-2xl font-bold">Speed</h1>
              <p className=" text-center"> {scooty?.speedRange || "speed"} </p>
            </div>
            <div className="p-2 rounded w-[45%] lg:w-[22%] flex flex-col justify-center shadow-md items-center">
              <TiBatteryCharge className=" text-[6rem] lg:text-[10rem] text-customGreen" />
              <h1 className=" text-2xl font-bold">battery</h1>
              <p className=" text-center"> {scooty?.battery || "battery"} </p>
            </div>
            <div className="p-2 rounded w-[45%] lg:w-[22%] flex flex-col justify-center shadow-md items-center">
              <GiCarWheel className=" text-[6rem] lg:text-[10rem] text-customGreen" />
              <h1 className=" text-2xl font-bold">Wheel</h1>
              <p className=" text-center"> {scooty?.wheel || "wheel"} </p>
            </div>
            <div className="p-2 rounded w-[45%] lg:w-[22%] flex flex-col justify-center shadow-md items-center">
              <ImPower className=" text-[6rem] lg:text-[10rem] text-customGreen" />
              <h1 className=" text-2xl font-bold">Power</h1>
              <p className=" text-center"> {scooty?.power} </p>
            </div>
          </div>
        </div>
        <Savings
          img={scooty?.images[0]}
          pid={scooty?._id}
          exPrice={scooty?.exShowroomPriceDetails[1]?.price}
          ePrice={scooty?.exShowroomPriceDetails[0]?.price}
        />
      </div>
      <Compare />
      <FAQ />
    </>
  );
};

export default ProductDescription;
