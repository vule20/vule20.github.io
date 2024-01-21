import React from "react";
import {
  FaGithub,
  FaLink,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#881c1c] text-white p-5">
      <div className="flex items-center space-x-10 justify-center">
        <div className="">
          <img src="/images/umass.svg" alt="UMass Amherst" width="300" />
        </div>

        <div className="items-center justify-center">
          &copy; 2021-{currentYear} Vincent (Vu) Le. All rights reserved
        </div>

        <div className="flex justify-center items-center">
          <div className="pr-4">
            <div className="mb-4">
              <a
                href="https://github.com/vu-leduc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
            <div>
              <FaLinkedin className="text-2xl" />
            </div>
          </div>
          <div className="">
            <div className="mb-4">
              <FaTwitter className="text-2xl" />
            </div>
            <div>
              <FaYoutube className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
