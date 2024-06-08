"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import brawlPiratesLogo from '/public/signalgif.gif';

const BotSection = () => {
  const router = useRouter();

  useEffect(() => {
    const sections = ['/signal1', '/signal2', '/signal3'];
    const randomIndex = Math.floor(Math.random() * sections.length);
    const selectedSection = sections[randomIndex];

    const timer = setTimeout(() => {
      router.push(selectedSection);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex justify-center flex-col rounded-2xl p-8 text-center w-[330px] h-[450px]">
        <h1 className="text-xl uppercase font-[400] leading-3 whitespace-nowrap text-center text-[#FF8585] mb-4 koulen-regular">
          Signal is ready🤖
        </h1>
        <div className="flex justify-center mb-4">
          <Image className="loading-img" src={brawlPiratesLogo} alt="Loading" width={300} height={150} unoptimized />
        </div>
      </div>
    </div>
  );
};

export default BotSection;
