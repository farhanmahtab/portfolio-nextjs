import type { StaticImageData } from "next/image";

const loadImage = (name: string): StaticImageData =>
  require(`../public/asset/${name}`).default;

const assetPaths = {
  // Projects
  iict: "iict.png",
  blog: "blog.jpg",
  // Languages
  cpp: "cpp.png",
  java: "java.png",
  javaScript: "js.png",
  ruby: "ruby.png",
  python: "python.png",
  // Web
  html: "html.png",
  css: "css-3.png",
  react: "react.png",
  nextjs: "nextjs.png",
  nodejs: "nodejs.png",
  rails: "rails.png",
  go: "go.png",
  // Databases
  mysql: "mySql.png",
  mongodb: "mongoDb.png",
  sqlServer: "sql-server.png",
  postgresql: "postgresql.png",
} as const;

type ImageAssets = {
  readonly [K in keyof typeof assetPaths]: StaticImageData;
};

const IMAGE_ASSETS: ImageAssets = Object.entries(assetPaths).reduce(
  (acc, [key, path]) => ({
    ...acc,
    [key]: require(`../public/asset/${path}`).default,
  }),
  {} as ImageAssets
);

export type { ImageAssets };
export default IMAGE_ASSETS;
