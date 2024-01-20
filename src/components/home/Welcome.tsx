import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/Home/welcome.png";
import Button from "../Button";

export default function Welcome() {
  return (
    <div className="flex justify-between">
      <div className=" w-[45%] flex flex-col gap-10">
        <div className=" font-bold text-5xl text-title">
          <div className="flex">
            <Link href="" className="pr-4">
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
            <h1>Bem-vindo à Brasil</h1>
          </div>
          <div className="flex">
            <Link href="" className="pr-4">
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
            <h1>Telhas Metálicas</h1>
          </div>
        </div>
        <div>
          <div className=" font-medium text-sm leading-7 text-justify">
            <p>
              Descubra a tradição e a inovação que definem a Brasil Telhas
              Metálicas. Fornecemos excelência em telhas metálicas, perfis e
              parafusos, construindo confiança e durabilidade em cada projeto.
            </p>
            <p>
              Explore o futuro da sua construção conosco! Na Brasil Telhas
              Metálicas, não apenas entregamos produtos de alta qualidade, mas
              também oferecemos soluções que unem tradição e inovação para
              transformar seus projetos em obras extraordinárias.
            </p>
          </div>
        </div>
        <div>
          <div className="text-title text-sm flex flex-col gap-2">
            <p className="font-normal">Quer saber mais?</p>
            <p className="font-bold">
              Continue navegando em nossa página ou entre em contato com um de
              nossos consultores!
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[45%]">
        <Image src={Logo} alt="Logo" width={475} height={300} />
        <div className="pt-16 flex gap-4">
          <div>
            <Button link="" text="Conhecer mais agora!" />
          </div>
          <div>
            <Button link="" text="Falar com consultor" />
          </div>
        </div>
      </div>
    </div>
  );
}
