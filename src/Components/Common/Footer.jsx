import React from "react";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/youtube";
import "react-social-icons/linkedin";
import "react-social-icons/twitter";

const Footer = () => {
  const scooterFooterData = [
    {
      title: "Scooters",
      subLinks: [
        {
          subItem: "Citizen Arrow",
          SubItemNavigation: "/",
        },
        {
          subItem: "Citizen Victa",
          SubItemNavigation: "/",
        },
        {
          subItem: "Citizen Wind Pro",
          SubItemNavigation: "/",
        },
        {
          subItem: "Citizen Wind+",
          SubItemNavigation: "/",
        },
        {
          subItem: "Citizen Affair",
          SubItemNavigation: "/",
        },
      ],
    },
  ];
  const Social = [
    {
      nav: "https://www.facebook.com/Citizencareev",
    },
    {
      nav: "https://www.instagram.com/citizenevmartofficial",
    },
    {
      nav: "https://www.youtube.com/@citizencare",
    },
    {
      nav: "https://www.linkedin.in",
    },
    {
      nav: "https://www.twitter.com",
    },
  ];
  // console.log(scooterFooterData);
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <div className=" w-[90%] border-b flex p-2 lg:p-10 py-6 flex-col lg:flex-row ">
        <div className=" w-full lg:w-[50%]">
          <img src={Logo} width={160} alt="" />
          <p className=" text-justify lg:text-left ">
            Citizen Care EV are the new buzz word when it comes to the world of
            automotive. With fossil fuel reserves running out and pollution
            levels increasing to dangerous levels, an alternative to internal
            combustion engines is the need of the hour.
          </p>
          <div className="flex my-4 lg:my-8 items-center">
            {Social.map((item, index) => (
              <div key={index} className="mx-2">
                <SocialIcon url={item.nav} style={{}} />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-around">
          <div>
            {scooterFooterData.map((item, index) => {
              return (
                <div className=" text-left" key={index}>
                  {<h1 className=" my-6"> {item.title} </h1>}
                  <div className="flex flex-col gap-3 text-left">
                    {item?.subLinks?.map((subItem, index) => {
                      return (
                        <Link key={index + 1} to={subItem?.SubItemNavigation}>
                          {" "}
                          {subItem.subItem}{" "}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-[50%] lg:w-[32%] text-left flex gap-3 flex-col">
            <h1 className=" my-5 lg:my-6"> Contact</h1>
            <p>
              Citizen Care Group, 159A, Behind IndusInd Bank, New Patliputra,
              Patna-, 800013.
            </p>

            {/* to add a link to email */}
            <a href="/">info@citizencareev.com</a>
            {/* to add link to mobile contact  auto contact */}
            <a href="/">+91-9608 555 514</a>
          </div>
        </div>
      </div>
      <p className=" text-sm lg:text-lg py-8 text-slate-400">
        {" "}
        Copyright &copy; 2024 Citizen Care Group. All rights reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
