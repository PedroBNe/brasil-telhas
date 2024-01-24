import Image from "next/image";

import Life from "@/assets/Trabalhe/Heart with Pulse.png";
import Award from "@/assets/Trabalhe/Popular woman.png";
import Time from "@/assets/Trabalhe/Time to Pay.png";
import Desenvolved from "@/assets/Trabalhe/Certificate.png";

export default function BenefitsWork() {
  return (
    <div className="mt-16">
      <div className="mb-8">
        <h1>Benefícios</h1>
      </div>
      <div className="flex justify-between">
        <div className="w-[20%] flex flex-col items-center text-center">
          <Image src={Life} alt="Coração" width={40} height={40} />
          <h2 className="text-black">Plano de Saúde</h2>
          <p>
            Um plano de saúde que cubra consultas, exames, internações e outros
            serviços médicos é um benefício valioso para os funcionários e suas
            famílias.
          </p>
        </div>
        <div className="w-[20%] flex flex-col items-center text-center">
          <Image src={Award} alt="Recompensa" width={40} height={40} />
          <h2 className="text-black">
            Programas de Reconhecimento e Recompensas
          </h2>
          <p>
            Estabelecer programas que reconheçam e recompensem o desempenho
            excepcional dos funcionários pode motivar e engajar a equipe.
          </p>
        </div>
        <div className="w-[20%] flex flex-col items-center text-center">
          <Image src={Time} alt="Coração" width={40} height={40} />
          <h2 className="text-black">
            Dias de Folga Adicionais ou Banco de Horas
          </h2>
          <p>
            Proporcionar dias de folga adicionais ou permitir a acumulação de
            horas extras pode dar aos funcionários mais controle sobre seu
            tempo.
          </p>
        </div>
        <div className="w-[20%] flex flex-col items-center text-center">
          <Image src={Desenvolved} alt="Coração" width={40} height={40} />
          <h2 className="text-black">Desenvolvimento Profissional</h2>
          <p>
            Investir em programas de treinamento e desenvolvimento para ajudar
            os funcionários a aprimorar suas habilidades e crescer em suas
            carreiras.
          </p>
        </div>
      </div>
    </div>
  );
}
