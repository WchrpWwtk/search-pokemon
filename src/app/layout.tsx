import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/css/globals.css";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search Pokemon",
  description: "The search-Pokemon application use a pokemon Graphql API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}