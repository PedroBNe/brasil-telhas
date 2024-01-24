import Image from "next/image";
import Logo from "@/assets/Sobre/Rectangle 7.png";
import LogoSigni from "@/assets/Sobre/Rectangle 14.png";
import Button from "../Button";

export default function Expansion() {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-4">
          <h1>A Expansão</h1>
          <Image src={Logo} alt="Logo" width={76} height={51} />
        </div>
        <div className="mb-6">
          <h2>Sim. Foi preciso, em 2 anos, expandir nossa fábrica</h2>
        </div>
        <div className="font-medium text-text flex flex-col gap-5 mb-12">
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
      <div className="flex justify-between mb-14">
        <div className="w-[45%] flex flex-col gap-4 text-justify">
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
      <div className="flex flex-col gap-8 mb-14">
        <div className="flex flex-col gap-4">
          <h2>Nosso Compromisso Permanece Firme</h2>
          <div className="flex flex-col gap-3 font-medium text-justify">
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
        <div className="flex justify-between">
          <div className="text-title w-[45%]">
            <p>Quer saber mais?</p>
            <p className="font-bold text-justify">
              Continue navegando em nossa página ou entre em contato com um de
              nossos consultores!
            </p>
          </div>
          <div className="w-[42%] flex gap-8">
            <div className="w-[250px]">
              <Button link="" text="Conhecer mais agora!" />
            </div>
            <div className="w-[250px]">
              <Button link="" text="Falar com consultor" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-6">
          <div className="w-[45%] flex flex-col justify-between">
            <div className=" flex flex-col gap-3 text-justify">
              <h2>Nossa missão</h2>
              <p>
                Proporcionar confiança e solidez para cada construção,
                oferecendo telhas metálicas de excelência que transcendem
                padrões, impulsionando o progresso e a segurança em projetos
                residenciais e comerciais. Estamos comprometidos em ser a
                escolha preferida de nossos clientes, construindo relações
                duradouras baseadas na qualidade, inovação e integridade.
              </p>
            </div>
            <div className=" flex flex-col gap-3 text-justify">
              <h2>Visão de mercado</h2>
              <p>
                Ser a líder indiscutível no fornecimento de telhas metálicas,
                reconhecida não apenas pela qualidade de nossos produtos, mas
                também pela paixão em superar as expectativas. Buscamos
                constantemente a excelência, impulsionando a inovação e sendo
                referência em práticas sustentáveis
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[48%] text-justify">
            <h2>Valores</h2>
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-bold">Excelência:</span> Buscamos a
                excelência em tudo o que fazemos, desde a seleção de materiais
                até o atendimento ao cliente. Comprometemo-nos a superar padrões
                e oferecer produtos que representem a qualidade que nos define.
              </p>
              <p>
                <span className="font-bold">Cliente em Primeiro Lugar:</span>{" "}
                Colocamos nossos clientes no centro de tudo o que fazemos.
                Entendemos as necessidades, ouvimos atentamente e trabalhamos
                incansavelmente para superar suas expectativas
              </p>
              <p>
                <span className="font-bold">Empatia e Respeito:</span>{" "}
                Valorizamos a empatia, entendendo e respeitando as necessidades
                e pontos de vista de nossos clientes, colaboradores e parceiros
                de negócios. Cultivamos um ambiente inclusivo onde todas as
                vozes são ouvidas e respeitadas.
              </p>
              <p>
                <span className="font-bold">Integridade:</span> Operamos com
                transparência, honestidade e responsabilidade em todas as nossas
                interações. Valorizamos a confiança que nossos clientes
                depositam em nós e agimos de maneira ética em todos os aspectos
                de nossos negócios.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Responsabilidade Social</h2>
          <p className="text-justify">
            Comprometemo-nos a contribuir para a comunidade e a sociedade em que
            operamos. Buscamos oportunidades para impactar positivamente,
            apoiando causas sociais, educacionais e ambientais, promovendo um
            papel ativo na construção de um mundo melhor.
          </p>
        </div>
      </div>
    </div>
  );
}
