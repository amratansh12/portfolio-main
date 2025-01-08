import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const leagueSpartan = localFont({
  src: "./fonts/LeagueSpartan.ttf",
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Amratansh Shrivastava",
  description:
    "This is the portfolio of Amratansh Shrivastava. A software developer with a passion for building things. Amratansh is a full-stack developer with experience in building web applications, and APIs. He has expertise in JavaScript, TypeScript, React, Node.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
