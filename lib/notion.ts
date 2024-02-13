import { NotionAPI } from "notion-client";
import {ExtendedRecordMap } from "notion-types";

export const notion = new NotionAPI();


export const fetchDataFromPageId = async (pageId: string) => {
  try {
    const notion = new NotionAPI();
    const recordMaps = await notion.getPage(pageId);

    return recordMaps;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};



export const fetchAllData = async (pageIds) => {
  const allDataPromises = pageIds.map(async (url) => {
    const data = await fetchDataFromPageId(url);
    return data;
  });

  const allData = await Promise.all(allDataPromises);

  return allData;
};
