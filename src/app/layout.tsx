import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Icon from "./favicon.png";
import localFont from "next/font/local";

const duolingoFont = localFont({
  src: [
    {
      path: "../../public/fonts/duolingoFont3.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/duolingoFont1.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/duolingoFont2.woff2",
      weight: "300",
    },
  ],
  variable: "--font-duolingo",
});

export const metadata: Metadata = {
  title: "Language_Hub - World best learning platform",
  description: "Learn language in funny ways",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={Icon.src} />
      </head>
      <body className={`${duolingoFont.variable} font-duolingo`}>
        {children}
      </body>
    </html>
  );
}
