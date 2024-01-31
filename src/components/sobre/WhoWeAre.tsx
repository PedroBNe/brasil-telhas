import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/Home/welcome.png";
import Button from "../Button";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="md:w-[50%] gap-10">
          <div className=" font-bold text-5xl text-title mb-8">
            <div className="flex">
              <h1>Quem somos?</h1>
            </div>
            <div className="flex">
              <h2>Somos a MAIOR DO SUL</h2>
            </div>
          </div>
          <div>
            <div className="flex justify-between font-medium text-sm leading-7">
              <div className="text-justify flex flex-col gap-6 font-medium">
                <p>
                  No início de fevereiro de 2022, em Sombrio - SC, nasceu a
                  Brasil Telhas Metálicas. Ao observar a imponência de suas
                  instalações e a qualidade de seus produtos, ninguém imaginaria
                  que a empresa tinha apenas alguns anos de vida. Tudo começou
                  com um visionário apaixonado pela ideia de reinventar o setor
                  de telhas metálicas, Renan Alexandrino. Ele obtinha um
                  objetivo claro: produzir e entregar credibilidade através de
                  produtos que não apenas resistissem ao teste do tempo, mas que
                  também fossem uma referência em inovação.
                </p>
                <p>
                  Os primeiros meses foram desafiadores. A equipe, formada por
                  engenheiros, designers e profissionais dedicados, enfrentou
                  inúmeras noites trabalhando incansavelmente para desenvolver
                  telhas metálicas que fossem não apenas robustas, mas também
                  esteticamente atraentes. Cada detalhe, desde a escolha dos
                  materiais até a criação dos perfis, era minuciosamente pensado
                  para refletir a visão da empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[45%]">
          <Image src={Logo} alt="Logo" width={475} height={300} />
        </div>
      </div>
      <div className="font-medium text-sm leading-7 text-justify flex flex-col gap-6">
        <p>
          A Brasil Telhas Metálicas não estava apenas construindo um negócio,
          mas moldando uma promessa para seus clientes: a promessa de confiança,
          durabilidade e qualidade. À medida que o tempo passava, a reputação da
          empresa crescia, e suas telhas começavam a adornar construções em todo
          o sul do país.
        </p>
        <p>
          A abordagem centrada no cliente da Brasil Telhas Metálicas não passou
          despercebida. A empresa não apenas entregava produtos de alta
          qualidade, mas também estabelecia relações sólidas com seus clientes.
          O suporte pós-venda era tão importante quanto a venda em si, e cada
          feedback era considerado uma oportunidade de aprendizado.
        </p>
        <p>
          Com o passar dos anos, a Brasil Telhas Metálicas cresceu de uma ideia
          ambiciosa para uma marca consolidada. Sua história, embora curta, era
          repleta de conquistas, desafios superados e clientes satisfeitos. A
          empresa continuava a trilhar seu caminho, sempre comprometida em
          oferecer telhas metálicas que não apenas cobriam estruturas, mas que
          também contavam a história de uma empresa que transformou uma visão em
          realidade.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-[100%] mt-8">
        <div className="text-title text-sm flex flex-col gap-2">
          <p className="font-normal">Quer saber mais?</p>
          <p className="font-bold">
            Continue navegando em nossa página ou entre em contato com um de
            nossos consultores!
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <Button link="/sobre" text="Conhecer mais agora!" />
          </div>
          <div>
            <Button
              link="https://api.whatsapp.com/send?phone=5548999040036"
              text="Falar com consultor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
