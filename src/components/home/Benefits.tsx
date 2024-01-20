import Image from "next/image";

import Logo from "@/assets/Benefits/Logo.png";
import Banner from "@/assets/Benefits/Banner.png";
import Button from "../Button";

export default function Benefits() {
  return (
    <div className="flex justify-between">
      <div className="w-[28%] flex justify-between flex-col">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="text-title my-[8%]">
          <h1 className="font-bold text-5xl pb-[1%]">Vantagens</h1>
          <p className="font-normal text-sm">
            Descubra o que você ganha ao utilizar nossos produtos em sua obra
          </p>
        </div>
        <div>
          <Image src={Banner} alt="Banner" width={340} height={450} />
        </div>
      </div>
      <div className="w-[28%] flex justify-between flex-col mt-[2%] text-justify">
        <div className="flex justify-center text-center">
          <Button link="" text="Falar com consultor" />
        </div>
        <div>
          <h2 className="text-title hover:text-text-select transition duration-300 pb-[3%]">
            Durabilidade Excepcional
          </h2>
          <p className="font-medium">
            As telhas metálicas da Brasil Telhas são conhecidas por sua
            resistência ao desgaste, garantindo uma durabilidade excepcional ao
            longo do tempo.
          </p>
        </div>
        <div>
          <h2 className="text-title hover:text-text-select transition duration-300 pb-[3%]">
            Alto Desempenho Térmico e Acústico
          </h2>
          <p className="font-medium">
            Nossas telhas metálicas proporcionam isolamento térmico eficiente,
            contribuindo para ambientes mais confortáveis. Além disso, oferecem
            benefícios acústicos, reduzindo o ruído externo.
          </p>
        </div>
        <div>
          <h2 className="text-title hover:text-text-select transition duration-300 pb-[3%]">
            Rápida Instalação e Manutenção Reduzida
          </h2>
          <p className="font-medium">
            A instalação é mais rápida do que a instalação de alguns outros
            materiais de cobertura, o que pode resultar em menor tempo de
            construção e custos de mão de obra. Elas são menos suscetíveis a
            problemas, o que pode resultar em custos mais baixos ao longo da
            vida útil do telhado.
          </p>
        </div>
      </div>
      <div className="w-[28%] flex justify-between flex-col mt-[2%]">
        <div>
          <h2 className="text-title hover:text-text-select transition duration-300 pb-[3%]">
            Versatilidade no Design
          </h2>
          <p className="font-medium">
            Oferecemos uma variedade de perfis e opções de cores, permitindo que
            você personalize o design da sua construção de acordo com suas
            preferências estéticas.
          </p>
        </div>
        <div>
          <h2 className="text-title hover:text-text-select transition duration-300 pb-[3%]">
            Resistência à Condições Climáticas
          </h2>
          <p className="font-medium">
            As telhas são projetadas para resistir a diversas condições
            climáticas, desde fortes chuvas até ventos intensos, oferecendo uma
            solução confiável para diversas regiões.
          </p>
        </div>
        <div>
          <h2 className="text-title hover:text-text-select transition duration-300 pb-[3%]">
            Descubra essas e <span>Muito+</span>
          </h2>
          <p className="font-medium">
            Ao escolher a Brasil Telhas Metálicas, você não apenas adquire
            produtos de alta qualidade, mas também beneficia-se de uma abordagem
            integrada que prioriza a satisfação do cliente e a excelência em
            todos os aspectos da construção metálica.
          </p>
        </div>
        <div className="flex justify-center text-center">
          <Button link="" text="Saber mais agora!" />
        </div>
      </div>
    </div>
  );
}
