// src/components/BotSection.js
"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import brawlPiratesLogo from '/public/loading.gif';

const BotSection = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   let timer;
  //   if (!clicked) {
  //     timer = setTimeout(() => {
  //       router.push('/loading2');
  //     }, 3000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [clicked, router]);

  const handleClick = () => {
    setClicked(true);
    router.push('/loading2');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-normal rounded-2xl pt-8 pb-8 text-center w-[330px] h-[450px]">
        <h1 className="text-lg uppercase font-[400] leading-3 whitespace-nowrap text-center text-[#FF8585] pt-5 mb-4 koulen-regular">
          Thimbles Bot Activated✅
        </h1>
        <div className="pl-8 pr-8">
          <div className="flex justify-center mb-4">
            <Image className="loading-img" src={brawlPiratesLogo} alt="Loading" width={120} height={150} unoptimized />
          </div>
          <button className="bg-[#B47373] border-2 uppercase border-[#000000] text-[#000000] font-semibold py-2 px-6 rounded-full hover:bg-[#b85c5c]" onClick={handleClick}>
            Start Bot
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotSection;
