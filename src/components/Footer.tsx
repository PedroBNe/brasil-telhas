import Image from "next/image";
import Link from "next/link";

import Local from "@/assets/PlaceMarker.png"
import Email from "@/assets/Email.svg"
import Call from "@/assets/Call.png"

import Google from "@/assets/google-plus.svg"
import Instagram from "@/assets/Instagram.png"
import Facebook from "@/assets/Facebook.png"
import Linkedin from "@/assets/LinkedIn.png"

import Map from "./Map"

import LogoFooter from "@/assets/Logo-footer.png"

import Button from "./Button";

export default function Footer(){
  return (
    <footer>
      <div className="flex my-20">
        <div className="w-[40%]">
          <div className="mb-[50px]">
            <h1 className="text-title font-bold text-5xl">Entre em contato</h1>
            <p className="text-title font-normal text-sm">Faça como nossos clientes e garanta qualidade na sua obra.</p>
          </div>
          <div className="flex mb-[50px]">
            <div>
              <Image src={Local} alt="Localização" />
            </div>
            <div className="text-text font-medium text-sm">
              <p>R. Antônio Simão, 543 - São José, </p>
              <p>Sombrio - SC, 88960-000</p>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div>
              <Image src={Email} alt="Email" />
            </div>
            <div className="text-text font-medium text-sm">
              <p>contato@brasiltelhasmetalicas.com.br</p>
              <p>comercial@brasiltelhasmetalicas.com.br</p>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div>
              <Image src={Call} alt="Telefone" />
            </div>
            <div className="text-text font-medium text-sm">
              <p>(48) 98809-9066</p>
              <p>(48) 3533-0000</p>
            </div>
          </div>
          <div className="flex">
            <Link className="w-[15%]" href="/"><Image src={Google} alt="Google"/></Link>
            <Link className="w-[15%]" href="/"><Image src={Instagram} alt="Instagram"/></Link>
            <Link className="w-[15%]" href="/"><Image src={Facebook} alt="Facebook"/></Link>
            <Link className="w-[15%]" href="/"><Image src={Linkedin} alt="LinkedIn"/></Link>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="mb-11">
            <Map />
          </div>
          <div className="flex">
            <div className="w-[60%] text-title">
              <p className="font-normal">Quer saber mais?</p>
              <p className="font-bold">Entre em contato agora mesmo com nossa equipe através do Whatsapp</p>
            </div>
            <div className="flex items-center">
              <Button link="/" text="Chamar no Whatsapp" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[25%]">
          <Image src={LogoFooter} alt="Logo" />
        </div>
        <div className="w-[25%]">
          <ul className="text-sm font-normal">
            <p className="text-title font-bold">Links</p>
            <li><Link href="/">Navegar no catálogo</Link></li>
            <li><Link href="/">Conhecer empresa</Link></li>
            <li><Link href="/">Acompanhar notícias</Link></li>
            <li><Link href="/">Trabalhar na Brasil Telhas</Link></li>
            <li><Link href="/">Opções de contato</Link></li>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul className="text-sm font-normal">
            <p className="text-title font-bold">Políticas</p>
            <li><Link href="/">Política de privacidade de dados</Link></li>
            <li><Link href="/">Política de uso de cookies</Link></li>
            <li><Link href="/">Política de marketing</Link></li>
            <li><Link href="/">Termos de uso de informações</Link></li>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul className="text-sm font-normal">
            <p className="text-title font-bold">Redes Sociais</p>
            <li><Link href="/">Nos siga no Instagram</Link></li>
            <li><Link href="/">Acompanhe nossa página no Facebook</Link></li>
            <li><Link href="/">Nos avalie no Google+</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}