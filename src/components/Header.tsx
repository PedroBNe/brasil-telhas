import Image from "next/image";
import Link from "next/link";

import Logo from '@/assets/logo-princ-white.png'

export default function Header(){
  return (
    <header className="w-full h-20 flex justify-between items-center">
      <div className="w-[50%] pl-[8%]">
        <Image
          src={Logo}
          alt="Logo"
        />
      </div>
      <div className="w-[50%] pr-[8%]">
        <nav className="flex gap-[4%] font-semibold text-white">
          <Link href="/">Sobre Nós</Link>
          <Link href="/">Produtos</Link>
          <Link href="/">Portfólio</Link>
          <Link href="/">Vantagens</Link>
          <Link href="/">Notícias</Link>
          <Link href="/">Contato</Link>
        </nav>
      </div>
    </header>
  )
}