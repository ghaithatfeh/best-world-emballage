import type { Metadata } from "next";
import Header from "@/components/Header";
import { balooBhaina2, tajawal } from "@/lib/fonts";
import "../styles/globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body className={`${balooBhaina2.variable} ${tajawal.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}