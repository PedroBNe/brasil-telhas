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

import FooterGhost from "@/assets/footerGhost.png"

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
              <Image
                src={Local}
                alt="Localização"
                width={40}
                height={40}
              />
            </div>
            <div className="text-text font-medium text-sm">
              <p>R. Antônio Simão, 543 - São José, </p>
              <p>Sombrio - SC, 88960-000</p>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div>
              <Image
                src={Email}
                alt="Email"
                width={40}
                height={40}
              />
            </div>
            <div className="text-text font-medium text-sm">
              <p>contato@brasiltelhasmetalicas.com.br</p>
              <p>comercial@brasiltelhasmetalicas.com.br</p>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div>
              <Image
                src={Call}
                alt="Telefone"
                width={40}
                height={40}
              />
            </div>
            <div className="text-text font-medium text-sm">
              <p>(48) 98809-9066</p>
              <p>(48) 3533-0000</p>
            </div>
          </div>
          <div className="flex">
            <Link className="w-[15%]" href="/"><Image src={Google} alt="Google" width={45} height={45}/></Link>
            <Link className="w-[15%]" href="/"><Image src={Instagram} alt="Instagram" width={45} height={45}/></Link>
            <Link className="w-[15%]" href="/"><Image src={Facebook} alt="Facebook" width={45} height={45}/></Link>
            <Link className="w-[15%]" href="/"><Image src={Linkedin} alt="LinkedIn" width={45} height={45}/></Link>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="mb-11">
            <Map />
          </div>
          <div className="flex gap-6">
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
          <Image
            src={LogoFooter}
            alt="Logo"
            width={160}
            height={100}
          />
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
      <div className="flex font-normal text-xs my-6">
        <div>
          <p className="pb-2">CNPJ: 44.159.581/0001-84</p>
          <div>
            <p>Copyright © 2023, Brasil Telhas Metálicas.</p>
            <p>Todos os Direitos Reservados.</p>
          </div>
        </div>
        <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
          <p>Developer</p>
          <Image 
            src={FooterGhost}
            alt="Logo rodapé"
            width={130}
            height={30}
          />
        </div>
      </div>
    </footer>
  )
}