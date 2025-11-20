import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kevin Cioch | Software Engineer",
  description:
    "I'm Kevin Cioch, a software engineer based in Lüdenscheid, Germany. I specialize in full-stack web technologies with a strong passion for frontend development.",
  authors: [{ name: "Kevin Cioch", url: "https://www.kevincioch.com" }],
  keywords:
    "Kevin Cioch, kecioch, Software Engineer, Software Developer, Fullstack, Frontend, Backend, Portfolio, React, Next",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://kit.fontawesome.com/1078e55ef0.js"
          crossOrigin="anonymous"
        />
        <div className="background" />
        <div className="gradient" />
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
