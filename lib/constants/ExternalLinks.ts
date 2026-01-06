interface ExternalLink {
  readonly text: string;
  readonly href: string;
}

interface ExternalLinksConfig {
  readonly bizotion: ExternalLink;
  readonly shellbeehaken: ExternalLink;
  readonly university: ExternalLink;
  readonly machineLearning: ExternalLink;
  readonly dataScience: ExternalLink;
  readonly cloudComputing: ExternalLink;
}

const EXTERNAL_LINKS = {
  bizotion: {
    text: "BizMotion Limited",
    href: "https://www.biz-motion.com/",
  },
  shellbeehaken: {
    text: "Shellbeehaken Limited",
    href: "https://shellbeehaken.com/",
  },
  university: {
    text: "Shahjalal University Of Science and Technology",
    href: "https://www.sust.edu/",
  },
  machineLearning: {
    text: "Machine learning",
    href: "https://www.sas.com/en_us/insights/analytics/machine-learning.html",
  },
  dataScience: {
    text: "Data science",
    href: "https://www.ibm.com/cloud/learn/data-science-introduction",
  },
  cloudComputing: {
    text: "Cloud Computing",
    href: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/",
  },
} as const satisfies ExternalLinksConfig;

export type { ExternalLink, ExternalLinksConfig };

export default EXTERNAL_LINKS;
