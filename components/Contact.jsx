import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase">Contact</p>
        <h2 className="py-4 tracking-widest text-green-200">Get In Touch</h2>
      </div>
      <div className="grid lg:grid-cols-5 gap-8">
        {/* left */}
        <div className="col-span-3 lg:col-span-2 w-full h-full  rounded-xl p-4 shadow-md shadow-green-300">
          <div className="lg:p-4 h-full">
            <div>
              <img
                className="rounded-xl hover:scale-105 ease-in duration-300 shadow-md shadow-blue-200"
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <h2 className="pt-4">Farhan Mahtab Mahi</h2>
              <p className="py-2 text-green-200">
                An undergrad Student in Software Engineering and a Full-stack
                Develeoper
              </p>
              <p className="py-4 text-green-200">
                I am learning and honing my skills.
              </p>
              <p className=" text-green-200">Availabale for Freelance.</p>
            </div>
            <div>
              <p className="uppercase text-xl pt-8">Lets get connceted</p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
      </div>
    </div>
  );
};

export default Contact;
