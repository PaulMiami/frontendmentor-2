import "./globals.css";

import type React from "react";

import { League_Spartan } from "@next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: "500",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${leagueSpartan.variable} font-sans bg-lightGrayishCyan pb-8`}
      >
        {children}
      </body>
    </html>
  );
}
