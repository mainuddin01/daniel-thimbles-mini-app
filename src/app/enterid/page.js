"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import idImage from "/public/id-image.jpeg";

const BotSection = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleContinue = () => {
    if (inputValue.trim() !== "") {
      router.push("/loading");
    } else {
      alert("Please enter your ID to continue.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-2xl flex flex-col justify-center items-center p-8 pt-0 text-center w-[330px] h-[450px]">
        <div className="flex justify-center mb-4">
          <Image className="loading-img" src={idImage} alt="Loading" width={140} height={130} unoptimized />
        </div>
        <h1 className="text-xl id-text font-[400] uppercase leading-3 text-[#FF8585] mb-4 koulen-regular">
          Your Player ID
        </h1>
        <input
          className="shadow appearance-none w-40  border-2 rounded-2xl border-[#000000] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder=""
          value={inputValue}
          onChange={handleInputChange}
        />

        <div className="py-10">
          <button
            className="bg-[#B47373] uppercase border-2 border-[#000000] text-[#000000] font-semibold py-2 px-6 rounded-full hover:bg-[#b85c5c]"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotSection;
