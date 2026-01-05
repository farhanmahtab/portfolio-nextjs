"use client";
import Link from "next/link";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl font-semibold tracking-widest uppercase text-[#4f8e38]">
          Contact
        </p>
        <h2 className="py-4 tracking-widest text-green-200">Get In Touch</h2>
      </div>
      <div className="grid lg:grid-cols-5 gap-8 lg:mx-20">
        {/* left */}
        <div className="col-span-3 lg:col-span-2 w-full h-full  rounded-xl p-4 shadow-md shadow-green-300">
          <div className="lg:p-4 h-full">
            <div>
              <picture>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300 shadow-md shadow-blue-200"
                  src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </picture>
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
              <p className=" text-green-200">Available for Freelance.</p>
            </div>
            <div>
              <p className="uppercase text-xl pt-8">Lets get connected</p>
              <div className="flex items-center justify-between max-w-82.5 m-auto py-4">
                <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/farhan-mahtab-mahi-72037320a/">
                    <FaLinkedinIn />
                  </Link>
                </div>

                <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <Link href="mailto:farhan.mahi1999@gmail.com">
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <Link href="https://github.com/farhanmahtab">
                    <FaGithub />
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
        {/* Right */}
        <div className="col-span-3 w-full h-auto shadow-md shadow-green-200 rounded-lg p-4">
          <div className="p-4 shadow-md">
            <h2 className="py-4 tracking-wider text-green-200">Contact Me</h2>
            <form action="">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-md py-2">Name</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-green-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-md py-2">Phone Number</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-green-200"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-md py-2">Email</label>
                <input
                  type="email"
                  className="border-2 rounded-lg p-3 flex border-green-200"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-md py-2">Subject</label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-green-200"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-md py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 flex border-green-200"
                  name=""
                  id=""
                  rows={10}
                ></textarea>
              </div>
              <button className="text-lg w-full h-full mt-4  p-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/home">
          <div className="rounded-full shadow-lg shadow-[#585c58] p-6 cursor-pointer hover:scale-115 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} className="text-green-400" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
