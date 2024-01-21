"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import IssuesPage from "./issues/page";
import { CgMail } from "react-icons/cg";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Home() {
  const contacts = [
    { label: "Gmail", icon: CgMail, value: "vdle@umass.edu" },
    {
      label: "Location",
      icon: FaLocationDot,
      value: "140 Governors Dr, Amherst, MA 01002, United States",
    },
    {
      label: "Google Scholar",
      icon: SiGooglescholar,
      value: "Google Scholar",
      href: "https://scholar.google.com/citations?user=WqEDp2oAAAAJ&hl=en",
    },
  ];
  const socialLinks = [
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
  ];
  return (
    <main>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <div className="avatar online">
                <div className="w-45 h-45 rounded-full">
                  {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                  <img
                    src="/images/avatar.jpg"
                    alt="Vincent (Vu)'s avatar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <p className="mb-2">
              I am a first-year Ph.D student at the Maining College of
              Information and Computer Sciences, University of Massachusetts
              Amherst, advised by Dr. Phuc Nguyen. My current research interest
              at UMass Amherst lies in the intersection of quantum computing and
              machine learning.
            </p>

            <p className="mb-2">
              Prior to joining UMass Amherst, I got my bachelor degree from
              Vietnam National University, Hanoi. I also had greate time
              collaborating with with Dr. Hai Phan and my incredibly nice and
              talented folks from Sillicon Valley to work on face idendication.
              In addition, I also worked with Prof. Bo Han's group at George
              Mason University on neural human rendering for real-time
              holographics communication (the Metaverse). You can check my
              publication page for more details
            </p>

            <p className="mb-2">
              Apart my role as a Ph.D student, I also hold appointment as a
              co-founder and software developer at MarkovAI, a startup in San
              Francisco, where my folks and I build Abbie.live, a social
              platform for finding best local events in a given location using
              recommendation systems and multimodal AI. If you're interested
              about my interesting engineering projects, be sure to visit them
              at projects.
            </p>

            <p className="mb-2">
              I'm actively looking for excellent collaborators to work with me
              in quantum machine learning!
            </p>
          </div>

          {/* Display my social platforms there for connection */}
          <div className="lg:pl-20">
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                  >
                    {React.createElement(link.icon, { size: 20 })}{" "}
                    <span className="ml-4">Follow me on {link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Contacts such as email and address */}
            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
              <ul>
                {contacts.map((contact, index) => (
                  <li
                    key={index}
                    className="flex mb-1 cursor-pointer text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                  >
                    {React.createElement(contact.icon, { size: 20 })}{" "}
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline cursor-pointer ml-4 text-sm"
                      >
                        {contact.label}
                      </a>
                    ) : (
                      <span className="ml-4 text-sm">{contact.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </div>

      {/* <IssuesPage /> */}

      {/* <div class="avatar online">
        <div class="w-24 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div> */}
    </main>
  );
}
