import Image from "next/image"
import Link from "next/link"

import Instagram from "@/assets/Instagram.png"
import Facebook from "@/assets/Facebook.png"

import Logo from "@/assets/Home/welcome.png"
import Button from "../Button"

export default function Welcome(){
  return (
    <div className="flex justify-between">
      <div className=" w-[45%] flex flex-col gap-10">
        <div className=" font-bold text-5xl text-title">
          <div className="flex">
            <Link href="" className="pr-4"><Image src={Instagram} alt="Instagram" width={40} height={45} /></Link>
            <h1>Bem-vindo à Brasil</h1>
          </div>
          <div className="flex">
            <Link href="" className="pr-4"><Image src={Facebook} alt="Facebook" width={40} height={45} /></Link>
            <h1>Telhas Metálicas</h1>
          </div>
        </div>
        <div>
          <div className=" font-medium text-sm leading-7">
            <p>Descubra a tradição e a inovação que definem a Brasil Telhas Metálicas. Fornecemos excelência em telhas metálicas, perfis e parafusos, construindo confiança e durabilidade em cada projeto.</p>
            <p>Explore o futuro da sua construção conosco! Na Brasil Telhas Metálicas, não apenas entregamos produtos de alta qualidade, mas também oferecemos soluções que unem tradição e inovação para transformar seus projetos em obras extraordinárias.</p>
          </div>
        </div>
        <div>
          <div className="text-title text-sm flex flex-col gap-2">
            <p className="font-normal">Quer saber mais?</p>
            <p className="font-bold">Continue navegando em nossa página ou entre em contato com um de nossos consultores!</p>
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
  )
}