"use client";

import Image from "next/image";
import brawlPiratesLogo from "/public/logo.png";
import { useRouter } from "next/navigation";

const BotSection = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/enterid");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex justify-between flex-col rounded-2xl p-8 text-center w-[330px] h-[450px]">
        <h1 className="text-xl font-[400] leading-3 text-[#FF8585] mb-4 koulen-regular uppercase">
          Thimbles BOT V0.2
        </h1>
        <div className="flex justify-center mb-4">
          <Image
            src={brawlPiratesLogo}
            alt="Brawl Pirates Logo"
            width={250}
            height={250}
          />
        </div>
        <button
          onClick={handleStart}
          className="bg-[#B47373] border-2 border-[#000000] text-[#000000] font-semibold py-2 px-6 rounded-full hover:bg-[#b85c5c]"
        >
          Start Bot
        </button>
        <a href="https://www.instagram.com/spinscasino/ " className="text-[#ffffff] py-10 font-bold underline text-[13px] mt-4 uppercase">
          Powered by Spinscasino TM
        </a>
      </div>
    </div>
  );
};

export default BotSection;
