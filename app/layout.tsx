import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vincent (Vu) Le",
  description: "UMass Amherst CS PhD student",
  icons: {
    icon: "/images/umass-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" data-theme="dracula">
      <body
        className={`${inter.variable} bg-white text-black dark:bg-[#090908] dark:text-white h-full
         selection:bg-gray-50 dark:selection:bg-gray-800 flex flex-col`}
      >
        <div className="flex-1">
          <NavBar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
