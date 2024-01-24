import Image from "next/image";
import Logo from "@/assets/Sobre/Rectangle 7.png";
import LogoSigni from "@/assets/Sobre/Rectangle 14.png";
import Button from "../Button";

export default function Expansion() {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h1>A Expansão</h1>
          <Image src={Logo} alt="Logo" width={76} height={51} />
        </div>
        <div>
          <h2>Sim. Foi preciso, em 2 anos, expandir nossa fábrica</h2>
        </div>
        <div>
          <p>
            A Brasil Telhas Metálicas está vivenciando uma fase incrível de
            crescimento, e para atender à demanda crescente, estamos orgulhosos
            em anunciar a inauguração do nosso novo pavilhão de produção.
          </p>
          <p>
            Este marco não é apenas um testemunho do sucesso da Brasil Telhas
            Metálicas, mas também um compromisso renovado com a excelência e a
            qualidade que você espera de nós. Nosso novo pavilhão é uma
            expressão tangível do nosso compromisso em elevar continuamente
            nossos padrões para fornecer as melhores telhas metálicas do
            mercado.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[50%]">
          <h2>Isso significa para você:</h2>
          <div>
            <p className="font-bold">Agilidade e Eficiência</p>
            <p>
              Com as novas instalações, seremos capazes de atender aos pedidos
              com maior rapidez e eficiência, garantindo prazos de entrega mais
              curtos para seus projetos cruciais.
            </p>
          </div>
          <div>
            <p className="font-bold">Inovação Contínua</p>
            <p>
              O novo pavilhão não é apenas um espaço físico expandido, mas um
              berço de inovação. Estamos investindo em tecnologia de ponta e
              processos aprimorados para oferecer produtos ainda mais avançados
              e sustentáveis.
            </p>
          </div>
          <div>
            <p className="font-bold">Capacidade de Produção Aumentada</p>
            <p>
              A expansão da nossa infraestrutura significa que poderemos atender
              a uma demanda ainda maior, sem comprometer a qualidade que você
              conhece e confia.
            </p>
          </div>
          <div>
            <p className="font-bold">Mais Opções, Mais Flexibilidade</p>
            <p>
              Com o novo espaço, estamos introduzindo uma variedade ainda maior
              de perfis, cores e designs, proporcionando a você uma gama mais
              ampla de opções para personalizar seus projetos.
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <Image src={LogoSigni} alt="Logo significado" />
        </div>
      </div>
      <div>
        <div>
          <h2>Nosso Compromisso Permanece Firme</h2>
          <div>
            <p>
              Nosso compromisso com a excelência, durabilidade e inovação
              permanece inabalável. O novo pavilhão é um testemunho do nosso
              comprometimento em superar as expectativas e fortalecer ainda mais
              nossa parceria.
            </p>
            <p>
              Junte-se a nós nesta emocionante jornada! Conte conosco para
              continuar a oferecer telhas metálicas que não apenas cobrem, mas
              elevam a qualidade e a estética das suas construções.
            </p>
            <p>A Brasil Telhas Metálicas: Sempre Inovando, Sempre Avançando!</p>
          </div>
        </div>
        <div>
          <div>
            <p>Quer saber mais?</p>
            <p>
              Continue navegando em nossa página ou entre em contato com um de
              nossos consultores!
            </p>
          </div>
          <div>
            <div>
              <Button link="" text="Conhecer mais agora!" />
            </div>
            <div>
              <Button link="" text="Falar com consultor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
