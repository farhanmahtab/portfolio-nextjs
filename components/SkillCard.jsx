import React from "react";
import Image from "next/image";

const SkillCard = ({ title, background }) => {
  return (
    <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-green-200">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto animate-pulse">
          <Image
            className="w-full h-auto m-auto bg-white"
            src={background}
            alt="/"
          ></Image>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
