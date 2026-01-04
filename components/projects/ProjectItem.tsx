import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface ProjectItemProps {
  title: string;
  backgroundImg: StaticImageData;
  projectURL: string;
  desc: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  projectURL,
  desc,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-green-200 rounded-xl p-2 group hover:bg-linear-to-r from bg-green-200">
      <Image
        className="w-full h-auto m-auto rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      ></Image>
      <div className="hidden group-hover:block absolute top-50% left-50% ">
        <h3 className="text-2xl tracking-wider text-green-600 text-center">
          {title}
        </h3>
        <p className="pt-2 pb-4 text-green-600 text-center ">{desc}</p>
        <Link href={projectURL}>
          <p className="py-4 text-center bg-green-600 text-green-100 rounded-xl font-bold text-lg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
