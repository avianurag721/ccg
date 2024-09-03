import React, { useEffect, useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import axios from "axios";

const { GET_PRODUCTS } = endpoints;

const ScooterComparison = () => {
  const [loading, setLoading] = useState(false);
  const [firstScooter, setFirstScooter] = useState(null);
  const [secondScooter, setSecondScooter] = useState(null);


  const [compareFirstProduct, setCompareFirstProduct] = useState([]);

  const [allScooties, setAllScooties] = useState(null);

  const setNewProducts = (product1, product2) => {
    setCompareFirstProduct([product1, product2]);
  };

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/Brochure.pdf"; // Adjust the path to your PDF file
    link.setAttribute("download", "Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Defaul useEffect
  useEffect(() => {
    const getAllScooties = async () => {
      try {
        // console.log("Getting all Scooties");
        setLoading(true);
        const response = await apiConnector("GET", GET_PRODUCTS);
        // console.log("Scooties API RESPONSE:", response?.data?.data);
        setAllScooties(response?.data?.data);
        setFirstScooter(response?.data?.data[0]);
        setSecondScooter(response?.data?.data[1]);
        setNewProducts(response?.data?.data[0], response?.data?.data[1]);
      } catch (error) {
        // console.error("Error getting scooties:", error);
      } finally {
        setLoading(false);
      }
      try {
      } catch (error) {
        console.error("Error fetching comparison data:", error);
      }
    };

    getAllScooties();
  }, []);

  // Compare useEffect
  useEffect(() => {
    if (firstScooter && secondScooter) {
      const fetchComparisonData = async () => {
        try {
          const response = await axios.get(
            `https://citizencareev-server-prod-negd46p6yq-el.a.run.app/api/v1/products/${firstScooter._id}/${secondScooter._id}`
          );
          setNewProducts(
            response.data.data.product1,
            response.data.data.product2
          );
        } catch (error) {
          console.error("Error fetching comparison data:", error);
        }
      };

      fetchComparisonData();
    }
  }, [firstScooter, secondScooter]);

  if (loading) return <p className=" ">Loading...</p>;

  if (!allScooties) return <p className="">No Scooties available</p>;


  const handleScooterChangeFirst = async (selectedName) => {
    const selectedScooter = allScooties.find(
      (scooter) => scooter.name === selectedName
    );
    setFirstScooter(selectedScooter);

  };

  const handleScooterChangeSecond = async (selectedName) => {
    const selectedScooter = allScooties.find(
      (scooter) => scooter.name === selectedName
    );
    setSecondScooter(selectedScooter);
  };

  const labels = [
    "Price",
    "Top speed",
    "Certified range",
    "Factor 1",
    "Factor 2",
    "Factor 3",
    "Factor 4",
    "Factor 5",
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-4 mt-10">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="">
            <tr>
              <th className="p-4"></th>
              {!loading && firstScooter ? (
                <th className="p-4">
                  <div className="flex flex-col items-center w-full">
                    <img
                      src={firstScooter.images[0] || ""}
                      alt={firstScooter.name || ""}
                      className="h-28 w-20 lg:w-32 object-fill rounded-lg mb-2"
                    />
                    <select
                      value={firstScooter.name || ""}
                      onChange={(e) => handleScooterChangeFirst(e.target.value)}
                      className="block w-[100%] lg:w-[80%] text-center border border-gray-300 rounded-md"
                    >
                      {allScooties.map((option, idx) => (
                        <option key={idx} value={option.name || ""}>
                          {option.name || ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </th>
              ) : (
                <th className="p-4">Loading...</th>
              )}
              {/* second Scooter */}
              {!loading && secondScooter ? (
                <th className="p-4">
                  <div className="flex flex-col items-center">
                    <img
                      src={secondScooter.images[0] || ""}
                      alt={secondScooter.name || ""}
                      className="h-28 w-20 lg:w-32 object-fill mb-2 rounded-lg"
                    />
                    <select
                      value={secondScooter.name || ""}
                      onChange={(e) =>
                        handleScooterChangeSecond(e.target.value)
                      }
                      className="block w-[100%] lg:w-[80%] text-center border border-gray-300 rounded-md"
                    >
                      {allScooties.map((option, idx) => (
                        <option key={idx} value={option.name || ""}>
                          {option.name || ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </th>
              ) : (
                <th className="p-4">Loading...</th>
              )}
            </tr>
          </thead>
          {/* carefully add the table body = DONE */}
          <tbody className="font-serif">
            {labels.map((label, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border p-4 font-sans text-start">{label}</td>

                {compareFirstProduct?.map((scooter, index) => (
                  <td key={index} className="border p-4 text-center">
                    {idx === 0 && (
                      <>
                        <span className="block font-bold">
                          {scooter.exShowroomPriceDetails[0].price}
                        </span>
                        <span className="block text-sm">
                          EMI starts at 3000
                        </span>
                      </>
                    )}
                    {idx === 1 && (
                      <span className="font-serif">
                        {scooter.features[1].text.replace("Speed: ", "")}
                      </span>
                    )}
                    {idx === 2 && <span className="font-serif">70,000</span>}
                    {idx === 3 && <span className="font-serif">80,000</span>}
                    {idx === 4 && <span className="font-serif">80,000</span>}
                    {idx === 5 && <span className="font-serif">80,000</span>}
                    {idx === 6 && <span className="font-serif">80,000</span>}
                    {idx === 7 && <span className="font-serif">80,000</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={downloadBrochure} className="bg-black text-white py-2 px-4 rounded">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default ScooterComparison;
