"use client";
import React from "react";
import {
  getBlockIcon,
  getPageImageUrls,
  getPageTitle,
  normalizeTitle,
  getBlockTitle,
} from "notion-utils";
import { ExtendedRecordMap } from "notion-types";
import { defaultMapImageUrl } from "react-notion-x";
import { mapImageUrl } from "@/app/components/NotionPage";
import { LazyImage } from "react-notion-x/build/components/lazy-image";

export const NotionWidget = ({
  recordMap,
  index,
}: {
  recordMap: ExtendedRecordMap;
  index: number;
}) => {
  //   const title = getPageTitle(recordMap);

  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;
  const blockSpaceId = block.space_id;
  const blockIcon = getBlockIcon(block, recordMap)?.trim();
  const title = getBlockTitle(block, recordMap);
  const createdTimestamp = block.created_time;
  const createdDate = new Date(createdTimestamp);

  const url = mapImageUrl(blockIcon, block);
  console.log("-------------");
  console.log(blockIcon);
  console.log(title);
  console.log(url);
  console.log(createdDate);
  console.log("+++++++++++++++");

  return (
    <div>
      <div className="mr-20">
        <a>
          <img src={url} alt="Vincent (Vu)&rsquo;s avatar" width={200} />
        </a>
      </div>
      <div className="flex text-xl font-bold" key={index}>
        <h1>{title}</h1>
      </div>

      <div className="mb-20">
        {createdDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
    </div>
  );
};

export default NotionWidget;
