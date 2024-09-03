import React, { useState } from "react";
import DemoImage from "../Images/DemoImage.png";
import { apiConnector } from "../Services/connector";
import { endpoints } from "../Services/apis";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const { GET_IN_TOUCH } = endpoints;
const ContactUsForm = () => {
  const [loading, Setloading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    name: "",
    address: "",
    pincode: "",
    date: "",
    dateOfPurchase: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("get in touch form", formData);

    try {
      Setloading(true);
      const response = await apiConnector("POST", GET_IN_TOUCH, formData);
      if (response.status === 201) {
        alert("Form submitted successfully");
        // console.log("Form submitted successfully", response.data);
        Setloading(false);
        alert(response?.data?.message);
      } else {
        alert("Form submission failed");
        console.error("Form submission failed", response);
        Setloading(false);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      Setloading(false);
    }
  };

  return (
    <div className="w-full  justify-between lg:flex md:flex   gap-2  rounded ">
      <div className="w-full">
        <img src={DemoImage} className="h-[100%] w-[100%]" alt="contact us" />
      </div>
      <div className="flex w-full justify-center">
        <form
          onSubmit={handleSubmit}
          className=" w-[90%] flex flex-col gap-3 lg:w-[80%] p-1 lg:p-4  h-full lg:h-[70vh] shadow-m"
        >
          <div>
            <h1 className=" text-2xl font-bold ">Contact Us</h1>
            <p>
              Fill in the form below to get in touch with{" "}
              <span className="text-blue-700">Citizen</span>{" "}
            </p>
          </div>
          <div>
            <TextField
              onChange={handleChange}
              size="small"
              value={formData.name}
              required
              type="text"
              name="name"
              id="name"
              label="Name"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="">
            <TextField
              onChange={handleChange}
              size="small"
              value={formData.address}
              required
              type="text"
              name="address"
              id="address"
              label="Address"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div>
            <TextField
              onChange={handleChange}
              size="small"
              value={formData.phone}
              required
              type="number"
              name="phone"
              id="phone"
              label="Contact No"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div>
            <TextField
              onChange={handleChange}
              size="small"
              value={formData.email}
              required
              type="email"
              name="email"
              id="email"
              label="Email"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className=" flex flex-col lg:flex-row justify-between ">
            <div className=" w-full lg:w-[45%]">
              <TextField
                onChange={handleChange}
                size="small"
                value={formData.pincode}
                required
                type="number"
                name="pincode"
                id="pincode"
                label="Pincode"
                pattersn="\d{6}"
                variant="outlined"
                className="w-full"
                maxLength="6"
              />
            </div>
            <div className=" w-full lg:w-[50%]">
              <DatePicker
                label="Date of Visit"
                className="w-full"
                name="date"
                id="date"
                onChange={(newValue) => {
                  setFormData({
                    ...formData,
                    date: newValue,
                  });
                }}
                slotProps={{ textField: { size: "small" } }}
              />
            </div>
          </div>
          <div>
            <DatePicker
              label="Date of Purchase"
              className="w-full"
              name="dateOfPurchase"
              id="dateOfPurchase"
              onChange={(newValue) => {
                setFormData({
                  ...formData,
                  date: newValue,
                });
              }}
              slotProps={{ textField: { size: "small" } }}
            />
          </div>
          <div>
            <TextField
              onChange={handleChange}
              multiline
              style={{ border: "none", outline: "none" }}
              rows={4}
              size="large"
              value={formData.message}
              required
              type="text"
              name="message"
              id="message"
              label="Message"
              variant="outlined"
              aria-required
              className="w-full"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white rounded-md bg-black hover:bg-slate-700 transition-all duration-300 focus:ring-offset-2"
            >
              {loading ? "Submiting..." : "Submit"}
            </button>
          </div>
          <div className="flex flex-col font-thin justify-center items-center text-xs">
            <p className=" text-center">
              By confirming, you consent to sharing your Citizen EV TR and
              purchase status with our Brand Champion and receiving calls about
              your scheduled Experience Centre visit.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
