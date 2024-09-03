import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
const { GET_CAROUSAL2 } = endpoints;

const Carousal2 = () => {
  const [carousalImages, setCarousalImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getAllCarousalImages = async () => {
      try {
        // console.log("Getting all Scooties");
        setLoading(true);
        const response = await apiConnector("GET", GET_CAROUSAL2);
        console.log("setCarousalImages:", response?.data?.data);
        setCarousalImages(response?.data?.data);
      } catch (error) {
        console.error("Error getting car 2:", error);
      } finally {
        setLoading(false);
      }
    };

      getAllCarousalImages();
      
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carousalImages.length);
    }, 2000); // Change slide every 2 seconds
      return () => clearInterval(interval);
      // eslint-disable-next-line
  }, [carousalImages]);

  if (loading) return null;

  if (!carousalImages) return null;
  return (
    <div className=" hidden lg:block relative w-full h-[22rem] overflow-hidden">
      {carousalImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
        >
          <img src={image?.imageLink} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {carousalImages.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousal2;
