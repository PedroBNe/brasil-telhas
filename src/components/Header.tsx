"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo-princ-white.png";
import LogoPrincipal from "@/assets/logo-princ.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();

  const linkStyle =
    pathname === "/sobre" ? "text-text-select border-header" : "";
  const produtosStyle =
    pathname === "/produtos" ? "text-text-select border-header" : "";
  const portfolioStyle =
    pathname === "/portfolio" ? "text-text-select border-header" : "";
  const vantagensStyle =
    pathname === "/vantagens" ? "text-text-select border-header" : "";
  const noticiasStyle =
    pathname === "/noticias" ? "text-text-select border-header" : "";
  const contatoStyle =
    pathname === "/contato" ? "text-text-select border-header" : "";

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY === 0;
      setIsAtTop(top);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full h-20 flex justify-between items-center z-30 transition duration-300 ${
        isAtTop ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="w-[50%] pl-[6%]">
        <Link href="/">
          {isAtTop ? (
            <Image src={Logo} alt="Logo" width={65} height={45} />
          ) : (
            <Image src={LogoPrincipal} alt="Logo" width={65} height={45} />
          )}
        </Link>
      </div>
      <div className="w-[50%] pr-[6%]">
        <nav
          className={`flex gap-[4%] font-semibold ${
            isAtTop ? "text-white" : "text-title"
          } text-sm`}
        >
          <Link className={`${linkStyle}`} href="/sobre">
            Sobre Nós
          </Link>
          <Link className={`${produtosStyle}`} href="/produtos">
            Produtos
          </Link>
          <Link className={`${portfolioStyle}`} href="/#portfolio">
            Portfólio
          </Link>
          <Link className={`${vantagensStyle}`} href="/#vantagens">
            Vantagens
          </Link>
          <Link className={`${contatoStyle}`} href="/contato">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
