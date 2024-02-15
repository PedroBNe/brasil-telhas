import Image from "next/image";
import Logo from "@/assets/Trabalhe/Rectangle 7.png";
import Button from "@/components/Button";

export default function VemTrabalhar() {
  return (
    <div>
      <div>
        <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0">
          <div className="md:w-[60%]">
            <h1 className="text-2xl md:text-[45px]">
              Vem trabalhar com quem mais{" "}
            </h1>
          </div>
          <div className="hidden md:block w-[12%]">
            <Image src={Logo} alt="Logo" width={135} height={91} />
          </div>
        </div>
        <div className="mb-6">
          <h1 className="text-2xl md:text-[45px]">cresce no sul do País</h1>
        </div>
        <div className="mb-6">
          <h2>Faça parte da nossa equipe!</h2>
        </div>
        <div className="flex flex-col gap-4 text-justify mb-6">
          <p>
            Se você é apaixonado por inovação, comprometido com a excelência e
            está pronto para fazer parte de uma empresa que constrói o futuro,
            queremos conhecê-lo. Explore oportunidades emocionantes de carreira
            conosco.
          </p>
          <p>
            Clique abaixo para ver nossas vagas disponíveis e envie sua
            candidatura. Juntos, podemos construir um caminho de sucesso
            profissional!
          </p>
        </div>
        <div>
          <div className="md:w-[350px]">
            <Button link="/trabalhe#jobs" text="CONHECER VAGAS DISPONÍVEIS" />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
