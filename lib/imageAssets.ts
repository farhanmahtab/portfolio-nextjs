import type { StaticImageData } from "next/image";
import logoSvg from "../public/asset/logo.svg";
import iictPng from "../public/asset/iict.png";
import blogJpg from "../public/asset/blog.jpg";
import cppPng from "../public/asset/cpp.png";
import javaPng from "../public/asset/java.png";
import jsPng from "../public/asset/js.png";
import rubyPng from "../public/asset/ruby.png";
import pythonPng from "../public/asset/python.png";
import htmlPng from "../public/asset/html.png";
import css3Png from "../public/asset/css-3.png";
import reactPng from "../public/asset/react.png";
import nextjsPng from "../public/asset/nextjs.png";
import nodejsPng from "../public/asset/nodejs.png";
import railsPng from "../public/asset/rails.png";
import goPng from "../public/asset/go.png";
import mySqlPng from "../public/asset/mySql.png";
import mongoDbPng from "../public/asset/mongoDb.png";
import sqlServerPng from "../public/asset/sql-server.png";
import postgresqlPng from "../public/asset/postgresql.png";
import kriyakarakPng from "../public/asset/kriyakarak.png";
import mapageecPng from "../public/asset/mapage-ec.png";
import mapageUserPng from "../public/asset/mapage-user.png";
import mapageSpacePng from "../public/asset/mapage-space.png";
import cypress from "../public/asset/cypress.png";

const assetPaths = {
  logoSvg: "logo.svg",
  iict: "iict.png",
  blog: "blog.jpg",
  cpp: "cpp.png",
  java: "java.png",
  javaScript: "js.png",
  ruby: "ruby.png",
  python: "python.png",
  html: "html.png",
  css: "css-3.png",
  react: "react.png",
  nextjs: "nextjs.png",
  nodejs: "nodejs.png",
  rails: "rails.png",
  go: "go.png",
  mysql: "mySql.png",
  mongodb: "mongoDb.png",
  sqlServer: "sql-server.png",
  postgresql: "postgresql.png",
  kriyakarak: "kriyakarak.png",
  mapageEc: "mapage-ec.png",
  mapageUser: "mapage-user.png",
  mapageSpace: "mapage-space.png",
  cypress: "cypress.png",
} as const;

type ImageAssets = {
  readonly [K in keyof typeof assetPaths]: StaticImageData;
};

const IMAGE_ASSETS: ImageAssets = {
  logoSvg: logoSvg,
  iict: iictPng,
  blog: blogJpg,
  cpp: cppPng,
  java: javaPng,
  javaScript: jsPng,
  ruby: rubyPng,
  python: pythonPng,
  html: htmlPng,
  css: css3Png,
  react: reactPng,
  nextjs: nextjsPng,
  nodejs: nodejsPng,
  rails: railsPng,
  go: goPng,
  mysql: mySqlPng,
  mongodb: mongoDbPng,
  sqlServer: sqlServerPng,
  postgresql: postgresqlPng,
  kriyakarak: kriyakarakPng,
  mapageEc: mapageecPng,
  mapageUser: mapageUserPng,
  mapageSpace: mapageSpacePng,
  cypress: cypress,
};

export type { ImageAssets };
export default IMAGE_ASSETS;
