'use client'
import React, { useState } from "react";

const DonateNowFormSection = () => {
  const [donationAmount, setDonationAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const [notify, setNotify] = useState(false);

  const RUPEES = [
    { price: "100" },
    { price: "200" },
    { price: "500" },
    { price: "1000" },
    { price: "2000" },
    { price: "5000" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      donationAmount: donationAmount || customAmount,
      ...formData,
      notify,
    };
    console.log(dataToSubmit, "heyyy");
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Data submitted successfully");
      } else {
        alert("Error in submission");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="  sm:py-10">
        <div className="mx-auto max-w-2xl px-5 lg:max-w-7xl lg:px-8 lg:w-9/12">
          
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 ">
              <div>
                <h2 className="font-medium py-3 text-balance text-semibold">
                1.  Choose Donation Value
                </h2>
                <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
                  <div className="w-full px-2">
                    <ul className="flex flex-wrap gap-3 items-center ">
                      {RUPEES.map((item) => (
                        <li className="mx-1" key={item.price}>
                          <a
                            href="#0"
                            className={`${
                              donationAmount === item.price
                                ? " bg-[#007931] text-white px-4 flex h-11 w-[100px] items-center justify-center rounded-md"
                                : "flex h-11 w-[100px] items-center justify-center rounded-md hover:bg-[#007931]  bg-opacity-[15%] px-4 text-sm text-body-color transition  hover:bg-opacity-400 hover:text-white"
                            }`}
                            onClick={() => setDonationAmount(item.price)}
                          >
                            ₹ {item.price}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-5 lg:w-8/12">
                <div>
                  <label className="">Add Another Value</label>
                  <input
                    type="number"
                    name="customValue"
                    className="block text-gray-800 w-full py-2 mt-1 bg-transparent border-b  focus:ring-orange-500 focus:border-orange-500 outline-none"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    checked={notify}
                    onChange={() => setNotify(!notify)}
                  />
                  <div className="text-sm w-full">
                    <p className="text-gray-500 ml-1">
                      Get notified when someone posts a comment on a posting.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold  underline-offset-4 py-5">
                 2. Enter Contact Information
                </h3>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 lg:w-9/12">
                  <div>
                    <label className="">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block text-gray-800 w-full py-2 mt-1 bg-transparent border-b focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div>
                    <label className="">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block text-gray-800 w-full py-2 mt-1 bg-transparent border-b focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div>
                    <label className="">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block text-gray-800 w-full py-2 mt-1 bg-transparent border-b focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label className="">Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={handleChange}
                      className="block text-gray-800 w-full py-2 mt-1 bg-transparent border-b focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="Enter mobile"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold  underline-offset-4 py-5">
                 3. Enter Billing Information
                </h3>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 lg:w-9/12">
                  <div>
                    <label className="">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="block text-gray-800 w-full py-2 mt-1 bg-transparent border-b focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="Enter address"
                    />
                  </div>
                  <div>
                    <label className="">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="block text-gray-800 w-full  py-2 mt-1 bg-transparent border-b focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="Enter city"
                    />
                  </div>
                  <div>
                    <label className="">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="block text-gray-800 w-full py-2 mt-1 bg-transparent border-b focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="Enter state"
                    />
                  </div>
                  <div>
                    <label className="">Pin Code</label>
                    <input
                      type="text"
                      name="pinCode"
                      maxLength={6}
                      value={formData.pinCode}
                      onChange={handleChange}
                      className="block text-gray-800 w-full text-sm py-2 mt-1 bg-transparent border-b focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="py-2 transition px-5 bg-green-600 bg-opacity-[25%] rounded-sm hover:bg-opacity-100 hover:text-white"
                >
                  Donate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateNowFormSection;