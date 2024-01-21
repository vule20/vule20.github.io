import { CgMail } from "react-icons/cg";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export const contacts = [
  {
    label: "Location",
    icon: FaLocationDot,
    value: "Amherst, Massachusetts, United States",
  },
  { label: "Gmail", icon: CgMail, value: "vdle@umass.edu" },
  {
    label: "Google Scholar",
    icon: SiGooglescholar,
    value: "Google Scholar",
    href: "https://scholar.google.com/citations?user=WqEDp2oAAAAJ&hl=en",
  },
];
export const socialLinks = [
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/vudle/",
  },
  {
    label: "X (Twitter)",
    icon: FaXTwitter,
    href: "https://twitter.com/LeDucVu11",
  },
  { label: "Github", icon: FaGithub, href: "https://github.com/vu-leduc" },
  // { label: "YouTube", icon: FaYoutube, href: "#" },
];
