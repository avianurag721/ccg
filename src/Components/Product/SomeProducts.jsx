import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FAQ from "../Common/FAQ";
// import { MdCurrencyRupee } from "react-icons/md";
import ScooterComparison from "./Compare";
import UrbanMobilityPosters from "../Home/UrbanMobilityPosters";

const ProductCard = ({ productDetails }) => {
  const { name, tagLine, images, priceRange } = productDetails;
  console.log("scotiessss", productDetails._id);
  const [minPrice, maxPrice] = priceRange.split("-").map((price) => price.trim());

  // Format the prices with the rupee sign
  const formattedMinPrice = `₹${minPrice}`;
  const formattedMaxPrice = `₹${maxPrice}`;
  return (
    <div className="p-4 overflow-hidden transition-all duration-500 ease-in-out flex sm:ml-0 flex-col lg:ml-[10%] mt-4 w-[100%] lg:w-[80%] items-start justify-between bg-white shadow-md rounded-lg">
      <img
        src={images[0]}
        alt={name}
        className="w-full object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-3xl font-sans font-semibold">{name}</h3>
        <p className="text-gray-500 font-sans text-xs">{tagLine}</p>
        <p className="text-green-500 mt-10 flex text-sm font-mono">
          {formattedMinPrice} - {formattedMaxPrice}
        </p>
        <Link
          to={`EV/${productDetails._id}`}
          className="w-full px-4 py-2 bg-gray-100 shadow-md text-black text-center rounded-md hover:bg-green-500 hover:text-white focus:outline-none"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const SomeProducts = () => {
  const [loading, setLoading] = useState(false);
  const [highSpeedScooties, setHighSpeedScooties] = useState(null);
  const [lowSpeedScooties, setLowSpeedScooties] = useState(null);
  const [highSpeedViewAll, setHighSpeedViewAll] = useState(false);
  const [lowSpeedViewAll, setLowSpeedViewAll] = useState(false);
  const [bikeViewAll, setBikeViewAll] = useState(false);
  const [eRikshaViewAll, setERikshaViewAll] = useState(false);
  const [bike, setBike] = useState(null);
  const [eRiksha, setERiksha] = useState(null);

  useEffect(() => {
    const getAllScooties = async () => {
      try {
        setLoading(true);

        // Fetching High speed scooties data
        const responses = await Promise.all([
          fetch(
            "https://citizencareev-server-prod-negd46p6yq-el.a.run.app/api/v1/products?type=SCOOTER&speedType=HIGH",
            { method: "GET", headers: { "Content-Type": "application/json" } }
          ),
          fetch(
            "https://citizencareev-server-prod-negd46p6yq-el.a.run.app/api/v1/products?type=SCOOTER&speedType=LOW",
            { method: "GET", headers: { "Content-Type": "application/json" } }
          ),
          fetch(
            "https://citizencareev-server-prod-negd46p6yq-el.a.run.app/api/v1/products?type=BIKE&speedType=NA",
            { method: "GET", headers: { "Content-Type": "application/json" } }
          ),
          fetch(
            "https://citizencareev-server-prod-negd46p6yq-el.a.run.app/api/v1/products?type=E-RIKSHA&speedType=NA",
            { method: "GET", headers: { "Content-Type": "application/json" } }
          ),
        ]);

        if (responses.some((response) => !response.ok)) {
          throw new Error("Failed to fetch data");
        }

        const [highData, lowData, bikeData, eRikshaData] = await Promise.all(
          responses.map((res) => res.json())
        );
        console.log(
          "Data fetched successfully:",
          highData?.data,
          lowData?.data,
          bikeData?.data,
          eRikshaData?.data
        );
        setHighSpeedScooties(highData?.data || []);
        setLowSpeedScooties(lowData?.data || []);
        setBike(bikeData?.data || []);
        setERiksha(eRikshaData?.data || []);
      } catch (error) {
        console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllScooties();
  }, [highSpeedViewAll, lowSpeedViewAll, bikeViewAll, eRikshaViewAll]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* High speed Scooties section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        High Speed Scooties
      </h2>
      <div className="flex flex-col items-center justify-centers overflow-hidden transition-all duration-500 ease-in-out">
        <div className="overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highSpeedViewAll ? (
            <>
              {highSpeedScooties?.map((scooty) => (
                <ProductCard key={scooty._id} productDetails={scooty} />
              ))}
            </>
          ) : (
            <>
              {highSpeedScooties?.slice(0, 3).map((t) => (
                <ProductCard key={t._id} productDetails={t} />
              ))}
            </>
          )}
        </div>
        {!highSpeedViewAll && highSpeedScooties?.length > 3 && (
          <button
            className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%]"
            onClick={() => {
              setHighSpeedViewAll(true);
            }}
          >
            View All
          </button>
        )}
      </div>

      {/* Low speed Scooties section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        Low Speed Scooties
      </h2>
      <div className="overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-centers">
        <div className="overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lowSpeedViewAll ? (
            <>
              {lowSpeedScooties?.map((scooty) => (
                <ProductCard key={scooty._id} productDetails={scooty} />
              ))}
            </>
          ) : (
            <>
              {lowSpeedScooties?.slice(0, 3).map((t) => (
                <ProductCard key={t._id} productDetails={t} />
              ))}
            </>
          )}
        </div>
        {!lowSpeedViewAll && lowSpeedScooties?.length > 3 && (
          <button
            className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%]"
            onClick={() => setLowSpeedViewAll(true)}
          >
            View All
          </button>
        )}
      </div>

      {/* Bikes section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        Bikes
      </h2>
      <div className="overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-centers">
        <div className="overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bikeViewAll ? (
            <>
              {bike?.map((scooty) => (
                <ProductCard key={scooty._id} productDetails={scooty} />
              ))}
            </>
          ) : (
            <>
              {bike?.slice(0, 3).map((t) => (
                <ProductCard key={t._id} productDetails={t} />
              ))}
            </>
          )}
        </div>
        {!bikeViewAll && bike?.length > 3 && (
          <button
            className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%]"
            onClick={() => setBikeViewAll(true)}
          >
            View All
          </button>
        )}
      </div>

      {/* E-Riksha section */}
      <h2 className="text-2xl mt-2 ml-2 lg:ml-10 font-sans flex items-center font-semibold lg:p-2">
        E-Riksha
      </h2>
      <div className="overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-centers">
        <div className="overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eRikshaViewAll ? (
            <>
              {eRiksha?.map((scooty) => (
                <ProductCard key={scooty._id} productDetails={scooty} />
              ))}
            </>
          ) : (
            <>
              {eRiksha?.slice(0, 3).map((t) => (
                <ProductCard key={t._id} productDetails={t} />
              ))}
            </>
          )}
        </div>
        {!eRikshaViewAll && eRiksha?.length > 3 && (
          <button
            className="bg-customGreen hover:scale-95 transition-all duration-300 rounded-md text-xl font-bold my-3 py-2 px-4 text-white md:w-auto text-center w-[50%]"
            onClick={() => setERikshaViewAll(true)}
          >
            View All
          </button>
        )}
      </div>

      <div className="mt-10">
        <UrbanMobilityPosters />
      </div>

      <ScooterComparison />

      <div>
        <FAQ />
      </div>
    </>
  );
};

export default SomeProducts;
