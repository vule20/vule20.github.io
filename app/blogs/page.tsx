import { NotionAPI } from "notion-client";
import NotionPage from "../components/NotionPage";

export default async function Home() {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage("2fc44604a5644ff9a77a4816c7dc9f3e");
  console.log("--------------------------------------------------");
  console.log(recordMap);
  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  );
}
