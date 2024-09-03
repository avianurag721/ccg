import React from "react";
// import MainCarousel from "./Components/Common/MainCarousal";
import FAQ from "./Common/FAQ";
import EVabout from "./../Images/EV-About.jpg";

const About = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <h1 className=" text-3xl mx-auto font-bold my-4">About US</h1>

      <img src={EVabout} alt="About US" />
      <div className=" w-full lg:w-[80%] flex flex-col gap-6 justify-center">
        {/* <MainCarousel /> */}
        <p>
          Citizen Care Electric Two Wheeler are the new buzz word when it comes
          to the world of automove. With fossil fuel reserves running out and
          polluon levels increasing to dangerous levels, an alternave to
          internal combuson engines is the need of the hour. Electric vehicles
          run clean and produce zero emissions, making them a popular alternave.
          Currently, the biggest problems faced by electric two-wheelers are
          range and charging infrastructure.But with improving technology
          andinfrastructure, electric motorcycles will gain more popularity in
          the near future. Citizen Care Electric Two Wheeler is premium electric
          scooter in India designed to give you the most comfortable ride
          experience that any scooter possibly can! With its mul-speed smart
          design, you are in total control of the ride experience whether it’s
          daily errand in traffic or long thrill rides
        </p>
        <div className=" ">
          <h1 className=" text-2xl font-bold text-customGreen">Our Vision</h1>
          <p>
            To be the Leader of the Electric Vehicle Industry by Year 2025, with
            its Presence in Every District of India, with a focused Approach on
            Quality, Strategies to bring Innovative Products and Best in Class
            Services, that adds Value to its Customer Base
          </p>
        </div>
        <div className=" ">
          <h1 className="text-2xl font-bold text-customGreen">Our Mission</h1>
          <p>
            To provide Affordable, Agile, Apt, Products and Environment Friendly
            Services in Electric Vehicle Civilization.
          </p>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default About;
