"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { GoSun } from "react-icons/go";
import { BsSun } from "react-icons/bs";
import { PiMoonBold } from "react-icons/pi";
import { Disclosure } from "@headlessui/react";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Blogs", href: "/blogs" },
    { label: "Misc", href: "/misc" },
    { label: "Resume", href: "/pdf/Vu_Le_Resume.pdf" },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto mt-2 mb-10 p-1 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="flex">
              <div className="flex items-center w-full relative gap-4">
                <div className="">
                  <Link href="/">
                    <h1 className="text-2xl font-bold text-[#991b1b]">
                      Anthony (Vu) <span className="text-[#292524]">Le</span>
                    </h1>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center flex flex-1 justify-end md:justify-center">
                  <div className="pointer-events-auto hidden md:block text-xl">
                    <ul className="flex rounded-full space-x-5 bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          className={classnames({
                            "text-[#881c1c]": link.href === currentPath,
                            "text-zinc-500": link.href !== currentPath,
                            "hover: #881c1c hover:bg-gray-100 focus:text-blue-800 focus:bg-gray-100 transition-color":
                              true,
                          })}
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-1 justify-end md:flex-1">
                  <div className="pointer-events-auto">
                    <GoSun style={{ color: "black", fontSize: "25px" }} />
                  </div>
                </div>

                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                     hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2
                     focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800"
                  >
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <ul className="flex flex-col space-y-2 text-right">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      className={classnames({
                        "text-zinc-900": link.href === currentPath,
                        "text-zinc-500": link.href !== currentPath,
                        "hover: text-zinc-800 hover:bg-gray-100 focus:text-zinc-800 focus:bg-gray-100 transition-color":
                          true,
                      })}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
