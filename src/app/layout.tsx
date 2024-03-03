import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "@next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: [],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
