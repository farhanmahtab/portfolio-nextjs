import seoData from "./seoData.json";

export type SEOConfig = {
  siteTitle: string;
  siteDescription: string;
  author: string;
  siteUrl: string;
  email: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
  ogImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  twitterImage: string;
  keywords: string[];
};

export const SEO_CONFIG: SEOConfig = seoData;
