"use client";
import React, { useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import Button from "../../button";

const DonateNowFormSection = () => {
  const [amount, setAmount] = useState(50);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (amount <= 0) newErrors.amount = "Donation amount must be greater than 0.";
    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newErrors.email = "Invalid email address.";
    if (!mobileNumber.trim() || !/^\d{10}$/.test(mobileNumber))
      newErrors.mobileNumber = "Mobile number must be 10 digits.";
    if (!dateOfBirth.trim()) newErrors.dateOfBirth = "Date of birth is required.";
    if (!streetAddress.trim()) newErrors.streetAddress = "Street address is required.";
    if (!postalCode.trim() || !/^\d{6}$/.test(postalCode))
      newErrors.postalCode = "Postal code must be 6 digits.";
    if (!city.trim()) newErrors.city = "City is required.";
    if (!state.trim()) newErrors.state = "State is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!");
      // Submit form logic here
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-red-50 w-full p-4 md:w-7/12 rounded-lg overflow-hidden">
      <h1 className="text-3xl font-bold text-black">Donation Form</h1>

      <form onSubmit={(e)=>{handleSubmit(e)}} className="flex flex-col gap-4">
        {/* Donation Amount */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Donation Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
          />
          {errors.amount && <p className="text-red-500 text-xs">{errors.amount}</p>}
        </div>

        {/* Personal Information */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Personal Information:</label>
          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
            />
          </div>
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
          />
          {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}

          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
          />
          {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>}
        </div>

        {/* Address Information */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Address Information:</label>
          <input
            type="text"
            placeholder="Street Address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
          />
          {errors.streetAddress && <p className="text-red-500 text-xs">{errors.streetAddress}</p>}

          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="flex-1 rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
            />
          </div>
          {errors.postalCode && <p className="text-red-500 text-xs">{errors.postalCode}</p>}
          {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}

          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
          />
          {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
        </div>

        {/* Payment Method */}
        {/* <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="rounded-lg outline-0 p-4 border border-slate-100 text-sm text-slate-800"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div> */}

        {/* Total Donations and Submit Button */}
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="flex flex-col justify-start items-start gap-1">
            <h2 className="text-sm font-bold text-slate-800">Total Donations</h2>
            <div className="flex justify-center items-center">
              <MdCurrencyRupee className="text-red-600" size={20} />
              <h4 className="text-xl font-extrabold text-red-600">{amount}</h4>
            </div>
          </div>
          <Button color="red-600" text="Donate" href="#submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default DonateNowFormSection;
