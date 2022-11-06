import React from "react";
import Link from "next/Link";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1280px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-200">
            Let's build something new
          </p>
          <h1 className="py-4 text-gray-200">
            Hi , I'm <span className="text-[#4f8e38]">Mahi</span>
          </h1>
          <h1 className="py-2 text-gray-200">
            A <span className="text-[#4f8e38]">Full-Stack</span> web Developer
          </h1>
          <p className="py-4 text-gray-200 max-w-[70%] m-auto">
            A Full Stack Developer is someone who works with the Back End — or
            server side — of the application as well as the Front End, or client
            side. Full Stack Developers have to have some skills in a wide
            variety of coding niches, from databases to graphic design and UI/UX
            management in order to do their job well.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/farhan-mahtab-mahi-72037320a/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <Link href="https://github.com/farhanmahtab">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <Link href="mailto:farhan.mahi1999@gmail.com">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <Link href="https://www.facebook.com/farhan.mahtab.56">
                <AiFillFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
