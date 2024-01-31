import Button from "../Button";

export default function Searching() {
  return (
    <div className="mt-6">
      <div className="mb-3">
        <h1>Procurando preço e qualidade?</h1>
        <h2>Está no lugar certo!</h2>
      </div>
      <div className="flex flex-col gap-4 mb-4 text-justify">
        <p>
          <span className="font-bold">Construa Conosco!</span> Estamos ansiosos
          para ouvir sobre seu próximo projeto e como as Telhas Metálicas Brasil
          podem transformar sua visão em realidade. Entre em contato agora para
          uma consultoria personalizada e descubra como nossa excelência em
          telhas metálicas pode elevar sua construção.
        </p>
        <p>Sua visão, nossa expertise - juntos, vamos construir o futuro!</p>
        <p>
          Entre em contato agora para transformar suas ideias em realidade.
          Estamos aqui para construir juntos o futuro da sua construção. Clique
          abaixo e inicie a conversa!
        </p>
      </div>
      <div className="flex justify-between">
        <div className="text-title w-[45%]">
          <p>Não perca tempo!</p>
          <p className="font-bold">
            Entre em contato agora mesmo com um de nossos representantes!
          </p>
        </div>
        <div className="w-[42%] flex gap-8">
          <div className="w-[250px]">
            <Button link="/sobre" text="Conhecer mais agora!" />
          </div>
          <div className="w-[250px]">
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
