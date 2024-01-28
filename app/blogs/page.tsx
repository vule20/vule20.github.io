import { NotionAPI } from "notion-client";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-notion-x/src/styles.css";
import styles from "./global.module.css";
import { getAllPagesInSpace, uuidToId, getPageProperty } from "notion-utils";
import { fetchAllData } from "./lib/notion";
import NotionWidget from "./lib/notionWidgets";

export default async function Home() {
  const notion = new NotionAPI();
  const getPage = async (pageId: string) => {
    return notion.getPage(pageId);
  };
  const pageId = "11b9b468cf754336aa5e57fa0ba7e40a";
  const rootSpaceId = "80377898-f1f7-48b0-ac38-06ad0ba48096";

  const pageMap = await getAllPagesInSpace(pageId, rootSpaceId, getPage, {
    traverseCollections: false,
  });

  const paths = Object.keys(pageMap)
    .map((pageId) => pageId.replace(/-/g, ""))
    .filter((path) => path && path !== "/");

  const recordMaps = await fetchAllData(paths);

  return (
    <main>
      {recordMaps.map((recordMap, index) => (
        <NotionWidget recordMap={recordMap} index={index} />
      ))}
    </main>
  );
}
