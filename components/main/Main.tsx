import Link from "next/link";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Main() {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1280px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-200">
            Let&apos;s build something new
          </p>
          <h1 className="py-4 text-gray-200 text-3xl">
            Hi , I&apos;m <span className="font-bold text-[#4f8e38]">Mahi</span>
          </h1>
          <h1 className="py-2 text-gray-200">
            A <span className="text-[#4f8e38] font-bold">Full-Stack</span> web
            Developer
          </h1>
          <p className="py-4 text-gray-200 max-w-[70%] m-auto">
            Software Engineer with hands-on experience designing and building
            scalable backend systems and full-stack web applications. Strong
            expertise in Ruby on Rails, Next.js, PostgreSQL, and distributed
            systems. Proven ability to work with large datasets, optimize system
            performance, and deliver production-grade solutions. Passionate
            about software architecture, clean code, and system design.
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
}
