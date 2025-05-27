import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best World Emballage",
  description: "Best World Emballage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhaina+2:600,500,400,700" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}