import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

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
      <body className={montserrat.className}>
        <div className="relative bg-img_maquina_telhas w-full h-full bg-cover bg-center">
          <div className="absolute inset-0 bg-img_maquina_telhas bg-cover bg-center brightness-25"></div>
          <Header />
          <div className="relative h-[425px] lg:h-[700px]  flex items-center">
            <Banner />
          </div>
        </div>
        <div className="px-[6%]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
