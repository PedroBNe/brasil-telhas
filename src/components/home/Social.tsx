import Image from "next/image";
import Button from "../Button";

import Facebook from "@/assets/Social/facebook.svg"
import Instagram from "@/assets/Social/instagram.svg"
import Google from "@/assets/Social/google.svg"
import Link from "next/link";

export default function Social(){
  return (
    <div className="bg-social flex justify-around h-40 w-[112%] ml-[-7%] p-[4%]">
      <div className="w-[30%] text-white flex flex-col justify-center">
        <p>Veja mais casos como esses em nossas</p>
        <h1 className="text-white">Redes Sociais</h1>
      </div>
      <div className="w-[20%] flex justify-between">
        <Image width={50} height={50} src={Facebook} alt="Facebook" className="transition transform hover:scale-125" />
        <Image width={50} height={50} src={Instagram} alt="Instagram" className="transition transform hover:scale-125"/>
        <Image width={50} height={50} src={Google} alt="Google" className="transition transform hover:scale-125" />
      </div>
      <div className="w-[30%] flex items-center gap-4 text-sm font-bold text-title">
        <Link className="min-w-[50%] bg-white rounded-md p-3 whitespace-nowrap flex justify-center" href="">Saber mais</Link>
        <Link className="min-w-[50%] bg-white rounded-md p-3 whitespace-nowrap flex justify-center" href="">Falar com consultor</Link>
      </div>
    </div>
  )
}