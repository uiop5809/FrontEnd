"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "@next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import RecoilContextProvider from "@/context/recoilContext";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: [],
});

// export const metadata: Metadata = {
//   title: "Kobaco AISAC",
//   description: "Kobaco Ai analysis System for Ad Creation",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:image" content={"public/kobacoIcon.png"} />
      <body className={notoSansKR.className}>
        <RecoilContextProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </ThemeProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
