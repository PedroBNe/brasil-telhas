"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo-princ-white.png";
import LogoPrincipal from "@/assets/logo-princ.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

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

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header
      className={`fixed top-0 w-full h-20 flex justify-between items-center z-30 transition duration-300 ${
        isAtTop &&
        pathname != "/marketing" &&
        pathname != "/cookies" &&
        pathname != "/privacidade"
          ? "bg-transparent"
          : "bg-white"
      }`}
    >
      <div className="w-[50%] pl-[6%]">
        <Link href="/">
          {isAtTop &&
          pathname != "/marketing" &&
          pathname != "/cookies" &&
          pathname != "/privacidade" ? (
            <Image src={Logo} alt="Logo" width={65} height={45} />
          ) : (
            <Image src={LogoPrincipal} alt="Logo" width={65} height={45} />
          )}
        </Link>
      </div>
      <div className="w-[50%] pr-[6%]">
        <div className="md:hidden justify-end flex">
          <motion.span
            onClick={() => setOpen((ev) => !ev)}
            className="button-top-ac flex justify-end z-10 relative max-conten"
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 90 : 0 }} // Rotação condicional, por exemplo
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isAtTop &&
            !open &&
            pathname != "/marketing" &&
            pathname != "/cookies" &&
            pathname != "/privacidade" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 50 50"
              >
                <path
                  fill="white"
                  d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 50 50"
              >
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
              </svg>
            )}
          </motion.span>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col dropDown"
            >
              <ul className="flex flex-col gap-4 items-center h-full justify-evenly">
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
              </ul>
            </motion.div>
          )}
        </div>
        <nav
          className={`gap-[4%] font-semibold hidden md:flex ${
            isAtTop &&
            pathname != "/marketing" &&
            pathname != "/cookies" &&
            pathname != "/privacidade"
              ? "text-white"
              : "text-title"
          } text-xs lg:text-sm`}
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
