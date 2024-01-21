import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme, ThemePanel } from "@radix-ui/themes";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} bg-white text-black dark:bg-[#090908] dark:text-white h-full
         selection:bg-gray-50 dark:selection:bg-gray-800 flex flex-col`}
      >
        <div className="flex-1">
          <Theme accentColor="red">
            <NavBar />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </Theme>
        </div>

        <Footer />
      </body>
    </html>
  );
}
