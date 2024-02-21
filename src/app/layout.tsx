import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Icon from "./favicon.png";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
