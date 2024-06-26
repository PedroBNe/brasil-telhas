import Image from "next/image";

import Are from "@/assets/AreWe/are.png";
import Link from "next/link";

export default function AreWe() {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-8">
      <div className="md:w-[50%]">
        <Image src={Are} alt="Imagem" width={698} height={382} />
      </div>
      <div className="md:w-[45%]">
        <h1>OK... mas quem somos?</h1>
        <p className="text-title pb-4 text-justify">Somos a MAIOR DO SUL!!</p>
        <p className="font-medium pb-4 text-justify">
          Ao contrário do que se imagina ao ver nossa qualidade e estrutura,
          nossa história não é de longa data. Iniciamos em fevereiro de 2022 com
          um objetivo único de produzir e entregar credibilidade com nossas
          telhas metálicas.{" "}
        </p>
        <p className="font-medium pb-4 text-justify">
          Aqui buscamos ser diretos e te entregar um bom resultado, por isso
          elaboramos algo especial para te contar com detalhes tudo o que
          construímos nesse período.
        </p>
        <div className="flex gap-7">
          <Link
            href="/sobre"
            className="bg-button h-12 w-64 rounded-md font-bold text-xs md:text-sm text-center text-white flex justify-center items-center"
          >
            Conhecer a Brasil Telhas
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5548999040036"
            className="bg-button h-12 w-64 rounded-md font-bold text-xs md:text-sm text-center text-white flex justify-center items-center"
          >
            Falar com consultor
          </Link>
        </div>
      </div>
    </div>
  );
}
