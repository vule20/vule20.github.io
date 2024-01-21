"use client";
import React from "react";
import { socialLinks, contacts } from "./socials";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  const locationContact = contacts.find(
    (contact) => contact.label === "Location"
  );

  return (
    <footer className="w-full bg-[#881c1c] text-white p-5">
      <div className="flex items-center space-x-36 justify-center">
        {/* Logo Image */}
        <div className="">
          <img src="/images/umass.svg" alt="UMass Amherst" width="250" />
        </div>

        {/* Copyright */}
        <div className="items-center justify-center flex flex-col">
        &copy; 2021-{currentYear} Vincent (Vu) Le.
          <p className="flex">
            {React.createElement(locationContact?.icon || "", { size: 20 })}{" "}
            {locationContact?.value}
          </p>
          
        </div>

        {/* contacts */}
        <div className="justify-center items-center">
          <ul className="flex">
            {socialLinks.map((link, index) => (
              <li key={index} className="mr-2">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium mt-2"
                >
                  {React.createElement(link.icon, { size: 20 })}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Page view counts */}
        <div className="stats shadow">
          <div className="stat text-xs">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">2400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
