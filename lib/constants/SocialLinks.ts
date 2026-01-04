import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/farhan-mahtab-mahi-72037320a/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/farhanmahtab",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "mailto:farhan.mahi1999@gmail.com",
    icon: AiOutlineMail,
    label: "Email",
  },
  {
    href: "https://www.facebook.com/farhan.mahtab.56",
    icon: AiFillFacebook,
    label: "Facebook",
  },
] as const;

export default SOCIAL_LINKS;
