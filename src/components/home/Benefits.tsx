import Image from "next/image";

import Logo from "@/assets/Benefits/Logo.png";
import Banner from "@/assets/Benefits/img-home.jpg";
import Button from "../Button";

export default function Benefits() {
  return (
    <div id="vantagens" className="flex justify-between flex-col md:flex-row">
      <div className="md:w-[28%] flex justify-between flex-col">
        <div className="flex justify-center md:justify-start">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="text-title my-[8%]">
          <h1 className="font-bold text-3xl md:text-5xl pb-[1%]">Vantagens</h1>
          <p className="font-normal text-sm">
            Descubra o que você ganha ao utilizar nossos produtos em sua obra
          </p>
        </div>
        <div className="min-w-[340px] min-h-[450px]">
          <Image
            src={Banner}
            alt="Banner"
            width={340}
            height={450}
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:w-[28%] flex justify-between flex-col mt-[2%] text-justify gap-6 md:gap-0">
        <div className="flex justify-center text-center">
          <Button
            link="https://api.whatsapp.com/send?phone=5548999040036"
            text="Falar com consultor"
          />
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
      <div className="md:w-[28%] flex justify-between flex-col mt-[2%]">
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
        <div className="flex justify-center text-center mt-6 md:mt-0">
          <Button link="/sobre" text="Saber mais agora!" />
        </div>
      </div>
    </div>
  );
}
