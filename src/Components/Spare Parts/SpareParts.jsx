import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
const { GET_PARTS } = endpoints;

const ProductCard = ({spareParts}) => {
  console.log("sapre",spareParts)
  const { name, image,partNo } = spareParts;
  // console.log("scotiessss", spareParts._id);
  return (
    <div className=" w-[45%] lg:w-[23%] p-4 overflow-hidden transition-all duration-500 ease-in-out flex flex-col  items-start justify-between bg-white shadow-md rounded-lg">
      {/* Uncomment and use the image source once available */}
      <img
        src={image}
        alt={`scooty`}
        className="w-full object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-2  w-full">
        <h3 className="text-3xl font-sans font-semibold">{name} </h3>
        <p className="text-gray-500 font-sans text-xs"> {partNo} </p>
        {/* <Link
          to={`EV`}
          // to={`EV/${spareParts._id}`}
          className="w-full px-4 py-2 transition-all duration-300 bg-gray-100 shadow-md text-black text-center rounded-md hover:bg-green-500 hover:text-white focus:outline-none "
        >
          View Details
        </Link> */}
      </div>
    </div>
  );
};

const SpareParts = () => {
  const [loading, setLoading] = useState(true);
  const [spareparts, SetSpareParts] = useState();

  useEffect(() => {
    const getAllNews = async () => {
      try {
        setLoading(true);
        const response = await apiConnector("GET", GET_PARTS);
        // console.log("spare data", response?.data?.data);
        SetSpareParts(response?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error getting spareparts:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllNews();
  }, []);
  // const sparePartsData = [1, 2, 4, 3, 6, 4, 5, 4];

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="  my-4 flex flex-col w-full items-center">
      <h1 className=" text-3xl font-serift">Spare Parts</h1>
      <div className=" flex w-full justify-around gap-5 flex-wrap mx-4 ">
        {spareparts.map((item) => (
          <ProductCard spareParts={item}  key={item?._id} />
        ))}
      </div>{" "}
    </div>
  );
};

export default SpareParts;
