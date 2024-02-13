import { NotionPage } from "@/app/components/NotionPage";
import { fetchAllData } from "@/lib/notion";
import { getPageTitle } from "notion-utils";
import type { Metadata } from "next";
import Head from "next/head";
import { notion } from "@/lib/notion";

import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-notion-x/src/styles.css";
import styles from "./global.module.css";

export const metadata: Metadata = {
  title: "Vincent's blogs",
  description: "Blogs",
  icons: {
    icon: "/images/umass-logo.svg",
  },
};

export default async function Page({ params }: { params: { id: string } }) {
  const recordMap = await notion.getPage(params.id);
  const blogRootPageId = process.env.BLOG_ROOT_PAGE_ID;
  const title = getPageTitle(recordMap);
  console.log(title);

  return (
    <>
      <div className="mb-10 flex items-center flex-col justify-center">
        <hr className="my-1 border-t w-3/4 mb-4 border-[#991b1b] border-2" />
        <h1 className="text-3xl font-bold w-3/4 mx-auto">{title}</h1>
        {/* <hr className="my-6 border-t border-black" /> */}
      </div>
      <NotionPage recordMap={recordMap} rootPageId={blogRootPageId} />
    </>
  );
}
