"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import IssuesPage from "./issues/page";
import News from "./components/News";
import Bio from "./components/Bio";
import { socialLinks, contacts } from "./components/socials";


export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 mb-10">
          {/* avatar div */}
          <div className="lg:pl-20">
            <div className="max-w-xs px-0 mb-4 lg:max-w-none">
              <img
                src="/images/avatar.jpg"
                alt="Vincent (Vu)&rsquo;s avatar"
                width="400"
              />
            </div>
            {/* <div className="lg:pl-20"> */}
            {/* Contacts such as email and address */}
            <div className="px-10">
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

            {/* Display my social platforms there for connection */}
            <div className="px-10 mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
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
                      <span className="ml-4">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bio section div */}
          <div className="lg:order-first lg:row-span-2">
            <Bio />
            <News />
          </div>
        </div>
      </div>
    </main>
  );
}
