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
import Link from "next/link";

export const BlogWidget = ({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) => {
  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;
  const blockSpaceId = block.space_id;
  const blockIcon = getBlockIcon(block, recordMap)?.trim();
  const title = getBlockTitle(block, recordMap);
  const createdTimestamp = block.created_time;
  const createdDate = new Date(createdTimestamp);
  const pageId = block.id.replace(/-/g, "");

  const url = mapImageUrl(blockIcon, block);

  if (url) {
    return (
      <div>
        <Link href={`/projects/${pageId}`}>
          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <a>
              <img src={url} alt="Vincent (Vu)&rsquo;s avatar" />
            </a>
          </div>
        </Link>
        <div className="flex text-xl font-bold card-body m-0 p-0 mt-2">
          <h1>
            <div className="line-clamp-2">{title}</div>
          </h1>
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
  } else {
    return null;
  }
};

export default BlogWidget;
