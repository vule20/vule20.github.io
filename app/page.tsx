"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import IssuesPage from "./issues/page";

export default function Home() {
  return (
    <main>
      <IssuesPage />
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
