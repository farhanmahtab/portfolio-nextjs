import React from "react";
import Image from "next/image";
import img from "../public/assets/img.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#4f8e38]">
            About
          </p>
          <h2 className="py-4 text-green-200">Who I Am.</h2>
          <p className="py-2 text-green-100">BIO Intro</p>
          <p className="py-2 text-green-100">
            I am an undergrad student , majoring in Software Engineering in
            <a className="hover:text-green-700" href="https://www.sust.edu/">
              {" "}
              Shahjalal University Of Science and Technology.
            </a>{" "}
            I am pursuing a career in computer science field.
          </p>
          <p className="py-2 text-green-100">
            I am interested in the field of{" "}
            <a
              className="hover:text-green-700"
              href="https://www.sas.com/en_us/insights/analytics/machine-learning.html"
            >
              Machine learning
            </a>{" "}
            ,
            <a
              className="hover:text-green-700"
              href="https://www.ibm.com/cloud/learn/data-science-introduction"
            >
              Data science
            </a>{" "}
            and{" "}
            <a
              className="hover:text-green-700"
              href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/"
            >
              Cloud Computing
            </a>
            .
          </p>
          <p className="py-2 text-green-100">
            My hoobies are coin collecting , gardening , playing games and
            reading comics.
          </p>
        </div>
        <div className="realative h-auto w-full mx-auto py-0 shadow-md mb-3  shadow-yellow-200 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image className="m-auto rounded-xl" src={img} alt="/"></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
