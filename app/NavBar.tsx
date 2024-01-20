"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import classnames from "classnames";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Issues", href: "/issues" },
    { label: "Research", href: "/research" },
    { label: "Project", href: "/project" },
    { label: "Blogs", href: "/blogs" },
    { label: "Tools", href: "/tools" },
    { label: "Misc", href: "/misc" },
    { label: "Support", href: "/support" },
  ];

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 flex space-x-10 border-b mb-5 px-5 h-14 items-center">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <ul className="flex space-x-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={classnames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "hover: text-zinc-800 transition-color": true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </ul>

            <Disclosure.Button className="inline-flex justify-between rounded-lg bg-purple-300 px-4 py-2 text-left text-sm text-purple-900 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </span>
            </Disclosure.Button>

            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <nav className="flex space-x-10 border-b mb-5 px-5 h-14 items-center">
                <ul className="flex space-x-10">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      className={classnames({
                        "text-zinc-900": link.href === currentPath,
                        "text-zinc-500": link.href !== currentPath,
                        "hover: text-zinc-800 transition-color": true,
                      })}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </nav>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default NavBar;
