"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/logo-princ-white.png';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const linkStyle = pathname === '/sobre' ? 'text-select' : 'white'
  const produtosStyle = pathname === '/produtos' ? 'text-select' : 'white'
  const portfolioStyle = pathname === '/portfolio' ? 'text-select' : 'white'
  const vantagensStyle = pathname === '/vantagens' ? 'text-select' : 'white'
  const noticiasStyle = pathname === '/noticias' ? 'text-select' : 'white'
  const contatoStyle = pathname === '/contato' ? 'text-select' : 'white'

  return (
    <header className="fixed top-0 w-full h-20 flex justify-between items-center z-30 bg-white">
      <div className="w-[50%] pl-[6%]">
        <Image
          src={Logo}
          alt="Logo"
          width={65}
          height={45}
        />
      </div>
      <div className="w-[50%] pr-[6%]">
        <nav className="flex gap-[4%] font-semibold text-white text-sm">
          <Link className={`text-${linkStyle}`} href="/sobre">Sobre Nós</Link>
          <Link className={`text-${produtosStyle}`} href="/produtos">Produtos</Link>
          <Link className={`text-${portfolioStyle}`} href="/portfolio">Portfólio</Link>
          <Link className={`text-${vantagensStyle}`} href="/vantagens">Vantagens</Link>
          <Link className={`text-${noticiasStyle}`} href="/noticias">Notícias</Link>
          <Link className={`text-${contatoStyle}`} href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header