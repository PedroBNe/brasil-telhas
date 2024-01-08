import Image from "next/image";
import Link from "next/link";

import Logo from '@/assets/logo-princ-white.png'

export default function Header(){
  return (
    <header className="w-full h-20 flex justify-between items-center">
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