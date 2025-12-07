import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // ✅ ایمپورت کنید

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import localFont from "next/font/local";
import SearchBar from "./components/classes/SearchBar/SearchBar";

const vazir = localFont({
  src: "./Vazir.woff2",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "کلاس یار",
  description: "کلاس یار اولین و مرجع انتخاب و پیدا کردن کلاس",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body className={`${vazir.className} mt-8`}>
        <Navbar />
        {/* ✅ Provider از اینجا به ClientLayout منتقل شد */}
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
