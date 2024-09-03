import React from "react";
// import scooty from "../../Images/Scooty/scooty.png";
// import DarkGradient from "../../Images/UrbanMobility/DarkGradient.png";
// import bgGradientColoured from '../../Images/UrbanMobility/bgGradientColoured.png';
// import BGBlack from '../../Images/UrbanMobility/BGBlack.png';
import Frame1 from '../../Images/UrbanMobility/Frame1.png';
import Frame2 from '../../Images/UrbanMobility/Frame2.png';

const UrbanMobilityPosters = () => {
  return (
    <div className=" w-full bg-slate-200 flex py-8 gap-5 flex-col items-center justify-center">
      {/* <div className=" flex flex-col gap-7 w-full lg:w-[98%] ">
        <div className=" flex gap-7 justify-center ">
          <div className=" w-[60%] h-[40vh] overflow-hidden relative flex bg-customGray2 rounded-md ">
            <ul className=" flex flex-col items-center justify-center text-white text-lg font-bold list-disc mx-auto">
              <li>Alloy Wheel Rims</li>
              <li>190 MM Ground Clearance</li>
              <li>Auto Repair Function</li>
            </ul>
            <img
              src={scooty}
              className="object-cover absolute -right-[10rem] -top-[10rem] overflow-hidden h-auto w-[60%] "
              alt="scooty"
            />
          </div>
          <div
            style={{ backgroundImage: `url(${DarkGradient})` }}
            className=" bg-no-repeat bg-cover rounded-md w-[30%] "
          >
          </div>
        </div>
        <div className=" flex gap-7 justify-center ">
          <div
            style={{ backgroundImage: `url(${BGBlack})` }}
            className=" bg-no-repeat bg-cover rounded-md w-[30%] "
          ></div>
          <div style={{backgroundImage:`url(${bgGradientColoured})`}} className=" w-[60%] h-[40vh] overflow-hidden relative flex bg-customGray2 rounded-md ">
            <ul className=" flex flex-col items-center justify-center text-white text-lg font-bold list-disc mx-auto">
              <li>Alloy Wheel Rims</li>
              <li>190 MM Ground Clearance</li>
              <li>Auto Repair Function</li>
            </ul>
            <img
              src={scooty}
              className="object-cover absolute -right-[10rem] -top-[10rem] overflow-hidden h-auto w-[60%] "
              alt="scooty"
            />
          </div>
        </div>
      </div> */}
      <img src={Frame1} alt="Career Care  EV" />
      <img src={Frame2} alt="Career Care  EV" />
    </div>
  );
};

export default UrbanMobilityPosters;

