import Image from "next/image";
import Link from "next/link";

import Local from "@/assets/PlaceMarker.png";
import Email from "@/assets/Email.svg";
import Call from "@/assets/Call.png";

import Google from "@/assets/google-plus.svg";
import Instagram from "@/assets/Instagram.png";
import Facebook from "@/assets/Facebook.png";
import Linkedin from "@/assets/LinkedIn.png";

import Map from "./Map";

import LogoFooter from "@/assets/Logo-footer.png";

import FooterGhost from "@/assets/footerGhost.png";

import Button from "./Button";

export default function Footer() {
  return (
    <footer>
      <div className="flex my-20">
        <div className="w-[40%]">
          <div className="mb-[50px]">
            <h1 className="text-title font-bold text-5xl">Entre em contato</h1>
            <p className="text-title font-normal text-sm">
              Faça como nossos clientes e garanta qualidade na sua obra.
            </p>
          </div>
          <div className="flex mb-[50px]">
            <div>
              <Image src={Local} alt="Localização" width={40} height={40} />
            </div>
            <div className="text-text font-medium text-sm">
              <p>R. Antônio Simão, 543 - São José, </p>
              <p>Sombrio - SC, 88960-000</p>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div>
              <Image src={Email} alt="Email" width={40} height={40} />
            </div>
            <div className="text-text font-medium text-sm">
              <p>contato@brasiltelhasmetalicas.com.br</p>
              <p>comercial@brasiltelhasmetalicas.com.br</p>
            </div>
          </div>
          <div className="flex mb-[50px]">
            <div>
              <Image src={Call} alt="Telefone" width={40} height={40} />
            </div>
            <div className="text-text font-medium text-sm">
              <p>(48) 98809-9066</p>
              <p>(48) 3533-0000</p>
            </div>
          </div>
          <div className="flex">
            <Link className="w-[15%] flex items-center" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M43.125 20.625H39.375V16.875H35.625V20.625H31.875V24.375H35.625V28.125H39.375V24.375H43.125M15 20.625V25.125H22.5C22.125 27 20.25 30.75 15 30.75C10.5 30.75 6.9375 27 6.9375 22.5C6.9375 18 10.5 14.25 15 14.25C17.625 14.25 19.3125 15.375 20.25 16.3125L23.8125 12.9375C21.5625 10.6875 18.5625 9.375 15 9.375C7.6875 9.375 1.875 15.1875 1.875 22.5C1.875 29.8125 7.6875 35.625 15 35.625C22.5 35.625 27.5625 30.375 27.5625 22.875C27.5625 21.9375 27.5625 21.375 27.375 20.625H15Z"
                  className="svg-hover"
                />
              </svg>
            </Link>
            <Link className="w-[15%] flex items-center" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path
                  d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                  className="svg-hover"
                ></path>
              </svg>
            </Link>
            <Link className="w-[15%] flex items-center" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 3.39999C10.8334 3.39999 3.33337 10.8833 3.33337 20.1C3.33337 28.4333 9.43337 35.35 17.4 36.6V24.9333H13.1667V20.1H17.4V16.4167C17.4 12.2333 19.8834 9.93333 23.7 9.93333C25.5167 9.93333 27.4167 10.25 27.4167 10.25V14.3667H25.3167C23.25 14.3667 22.6 15.65 22.6 16.9667V20.1H27.2334L26.4834 24.9333H22.6V36.6C26.5274 35.9797 30.1037 33.9759 32.6833 30.9501C35.2628 27.9243 36.6756 24.0761 36.6667 20.1C36.6667 10.8833 29.1667 3.39999 20 3.39999Z"
                  className="svg-hover"
                />
              </svg>
            </Link>
            <Link className="w-[15%] flex items-center" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  className="svg-hover"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="mb-11">
            <Map />
          </div>
          <div className="flex gap-6">
            <div className="w-[60%] text-title">
              <p className="font-normal">Quer saber mais?</p>
              <p className="font-bold">
                Entre em contato agora mesmo com nossa equipe através do
                Whatsapp
              </p>
            </div>
            <div className="flex items-center">
              <Button link="/" text="Chamar no Whatsapp" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[25%]">
          <Image src={LogoFooter} alt="Logo" width={160} height={100} />
        </div>
        <div className="w-[25%]">
          <ul className="text-sm font-normal">
            <p className="text-title font-bold">Links</p>
            <li>
              <Link href="/">Navegar no catálogo</Link>
            </li>
            <li>
              <Link href="/">Conhecer empresa</Link>
            </li>
            <li>
              <Link href="/">Acompanhar notícias</Link>
            </li>
            <li>
              <Link href="/trabalhe">Trabalhar na Brasil Telhas</Link>
            </li>
            <li>
              <Link href="/">Opções de contato</Link>
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul className="text-sm font-normal">
            <p className="text-title font-bold">Políticas</p>
            <li>
              <Link href="/">Política de privacidade de dados</Link>
            </li>
            <li>
              <Link href="/">Política de uso de cookies</Link>
            </li>
            <li>
              <Link href="/">Política de marketing</Link>
            </li>
            <li>
              <Link href="/">Termos de uso de informações</Link>
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul className="text-sm font-normal">
            <p className="text-title font-bold">Redes Sociais</p>
            <li>
              <Link href="/">Nos siga no Instagram</Link>
            </li>
            <li>
              <Link href="/">Acompanhe nossa página no Facebook</Link>
            </li>
            <li>
              <Link href="/">Nos avalie no Google+</Link>
            </li>
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
          <Image src={FooterGhost} alt="Logo rodapé" width={130} height={30} />
        </div>
      </div>
    </footer>
  );
}
