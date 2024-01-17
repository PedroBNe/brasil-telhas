import Image from "next/image";

import Are from "@/assets/AreWe/are.png"
import Button from "../Button";
import Link from "next/link";

export default function AreWe(){
  return (
    <div className="flex justify-between mt-8">
      <div className="w-[50%]">
        <Image src={Are} alt="Imagem" width={698} height={382} />
      </div>
      <div className="w-[45%]">
        <h1>OK... mas quem somos?</h1>
        <p className="text-title pb-4">Somos a MAIOR DO SUL!!</p>
        <p className="font-medium pb-4">Ao contrário do que se imagina ao ver nossa qualidade e estrutura, nossa história não é de longa data. Iniciamos em favereiro de 2022 com um objetivo único de produzir e entregar credibilidade com nossas telhas metálicas. </p>
        <p className="font-medium pb-4">Aqui buscamos ser diretos e te entregar um bom resultado, por isso elaboramos algo especial para te contar com detalhes tudo o que construímos nesse período.</p>
        <div className="flex gap-7">
          <Link href="" className="bg-button h-12 w-64 rounded-md font-bold text-sm text-center text-white flex justify-center items-center">Conhecer a Brasil Telhas</Link>
          <Link href="" className="bg-button h-12 w-64 rounded-md font-bold text-sm text-center text-white flex justify-center items-center">Falar com consultor</Link>
        </div>
      </div>
    </div>
  )
}