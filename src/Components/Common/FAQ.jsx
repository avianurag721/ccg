import React, { useState } from "react";
import accordionData from "../../Data/FAQData";
import BookYourRide from "./BookYourRide";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <div className=" flex flex-col justify-center items-center w-full ">
      <div className="flex flex-col items-start gap-4 w-full lg:w-[90%] ">
        <h1 className=" text-3xl font-bold">FAQs</h1>
        <h2 className=" text-lg text-slate-500">Your Questions Answered</h2>
        <div className=" w-full flex flex-col">
          {accordionData.map((item, index) => (
            <div key={index}>
              <h2 id={`accordion-collapse-heading-${index + 1}`}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-2 lg:p-5 font-medium text-gray-500 border ${
                    index === 0 ? "border-b-0 rounded-t-xl" : "border-b-0"
                  } border-gray-200 focus:ring-2 focus:ring-customGreen dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openItem === index}
                  aria-controls={`accordion-collapse-body-${index + 1}`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      openItem === index ? "" : "rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              {openItem === index && (
                <div
                  id={`accordion-collapse-body-${index + 1}`}
                  aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                >
                  <div className="p-2 lg:p-5 border text-start border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <BookYourRide />
    </div>
  );
};

export default FAQ;
