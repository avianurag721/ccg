import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import testImage from "../../Images/EV-About.jpg";
const { GET_NEWS } = endpoints;

const News = () => {
  const [loading, setLoading] = useState(true);
  const [News, SetNews] = useState();

  useEffect(() => {
    const getAllNews = async () => {
      try {
        setLoading(true);
        const response = await apiConnector("GET", GET_NEWS);
        console.log("newws data", response?.data);
        SetNews(response?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllNews();
  }, []);

  // const News = [
  //   {
  //     photo: "image",
  //     headline: "this is the new",
  //     moreInfo: "this news is regarding the scooter vehicle",
  //   },
  //   {
  //     photo: "image",
  //     headline: "this is the new",
  //     moreInfo: "this news is regarding the scooter vehicle",
  //   },
  //   {
  //     photo: "image",
  //     headline: "this is the new",
  //     moreInfo: "this news is regarding the scooter vehicle",
  //   },
  //   {
  //     photo: "image",
  //     headline: "this is the new",
  //     moreInfo: "this news is regarding the scooter vehicle",
  //   },
  // ];

  if (loading) {
    return null;
  }
  return (
    <div className=" w-full flex my-1 lg:my-4  justify-center">
      <div className=" w-[90%]  flex flex-col ">
        <h1 className=" text-left text-3xl font-bold">Reports & Headline</h1>
        <div className=" flex flex-wrap mx-auto gap-2 m-4 justify-between">
          {News.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 w-full lg:w-[35%]    border-black"
            >
              <img src={testImage} alt="newsImage" width={70} />
              <div className=" flex flex-col gap-2 items-start">
                <p className="  text-slate-600"> {item.date} </p>
                <h1 className=" font-bold"> {item.title} </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
