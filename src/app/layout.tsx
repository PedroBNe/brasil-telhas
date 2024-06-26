import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Whatsap from "@/components/Whatsap";
import CookiesPopUp from "@/components/Cookies";
import PopUp from "@/components/PopUp";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brasil Telhas",
  description: "Telhas Metálicas",
  authors: [
    { name: "Pedro Barreto Neto" },
    { name: "pedro.barreto.ne@gmail.com" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
        <div className="relative bg-img_maquina_telhas w-full h-full bg-cover bg-center">
          <div className="absolute inset-0 bg-img_maquina_telhas bg-cover bg-center brightness-25"></div>
          <Header />
          <Banner />
        </div>
        <div className="px-[6%] max-w-[1700px] m-auto">
          {children}
          <Whatsap />
          <Footer />
        </div>
        <PopUp />
        <CookiesPopUp />
      </body>
    </html>
  );
}
