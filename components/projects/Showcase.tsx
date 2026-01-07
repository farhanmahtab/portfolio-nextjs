import React, { FC } from "react";
import IMAGE_ASSETS from "@/lib/imageAssets";
import ShowcaseItem from "./ShowcaseItem";

const Showcase: FC = () => {
  return (
    <div id="showcase" className="w-full my-5">
      <div className="max-w-310 mx-auto px-2 mb-12">
        <p className="text-xl font-semibold tracking-widest uppercase text-[#4f8e38]">
          Showcase
        </p>
        <h2 className="py-2 tracking-widest text-green-200">
          Products i&#39;ve worked on
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:mx-20">
        <ShowcaseItem
          title="Cypress"
          backgroundImg={IMAGE_ASSETS.cypress}
          projectURL="https://cypress.bizmotionapp.com/"
          desc="Ruby on Rails ,NextJs ,TailwindCSS ,RSpec and PostgreSQL"
        />
        <ShowcaseItem
          title="Kriyakarak"
          backgroundImg={IMAGE_ASSETS.kriyakarak}
          projectURL="https://kriyakarak.com/"
          desc="React ,NodeJS ,Express, MongoDB ,AWS ,SSLCommerce"
        />
        <ShowcaseItem
          title="MaPage EC"
          backgroundImg={IMAGE_ASSETS.mapageEc}
          projectURL="https://shellbeehaken.com/portfolio/1"
          desc="NextJS, React ,NodeJS ,Express and MongoDB"
        />
        <ShowcaseItem
          title="MaPage User"
          backgroundImg={IMAGE_ASSETS.mapageUser}
          projectURL="https://shellbeehaken.com/portfolio/2"
          desc="NextJS, React ,NodeJS ,Express and MongoDB"
        />
        <ShowcaseItem
          title="MaPage Space Management"
          backgroundImg={IMAGE_ASSETS.mapageSpace}
          projectURL="https://shellbeehaken.com/portfolio/4"
          desc="NextJS, React ,NodeJS ,Express and MongoDB"
        />
        <ShowcaseItem
          title="IICT Website"
          backgroundImg={IMAGE_ASSETS.iict}
          projectURL="https://github.com/Fahimefto/iict-sust-backend"
          desc="nextJs ,TailwindCSS ,NodeJS ,Cloudinery and MongoDB"
        />
      </div>
    </div>
  );
};

export default Showcase;
