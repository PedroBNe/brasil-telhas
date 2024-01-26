import Image from "next/image";

import Image1 from "@/assets/Product/telha-foto.png";
import Image2 from "@/assets/Product/telha-foto (1).png";
import Image3 from "@/assets/Product/img (2).png";
import Image4 from "@/assets/Product/img (3).png";
import Button from "../Button";

export default function ProductDetails() {
  const product = {
    primaryImage: Image1,
    primaryImage2: Image2,
    Images: [Image3, Image4, Image4],
  };

  return (
    <div>
      <div className="flex justify-between mb-10">
        <div className="w-[55%] flex flex-col justify-between">
          <Image
            src={product.primaryImage}
            alt="Primeira Imagem"
            width={766}
            height={367}
          />
          <Image
            src={product.primaryImage2}
            alt="Segunda Imagem"
            width={739}
            height={511}
          />
        </div>
        <div className="w-[45%]">
          <h1 className="mb-4">Telha Sanduíche</h1>
          <p className="mb-2">
            A BRASIL TELHAS TERMOACÚSTICAS possuem maior eficiência TÉRMICA e
            ACÚSTICA para você. Podendo ser na cor natural da chapa (aluzinco)
            ou com pintura PRÉ ou PÓS PINTADA. Outra grande vantagem da BRASIL
            TELHAS é que seu comprimento é definido pelo cliente, podendo ser
            cortadas conforme seus projetos.
          </p>
          <p className="mb-4">
            A BRASIL TELHAS TERMOACÚSTICAS possuem maior eficiência TÉRMICA e
            ACÚSTICA para você. Podendo ser na cor natural da chapa (aluzinco)
            ou com pintura PRÉ ou PÓS PINTADA. Outra grande vantagem da BRASIL
            TELHAS é que seu comprimento é definido pelo cliente, podendo ser
            cortadas conforme seus projetos.
          </p>
          <div className="mb-4">
            <Button link="" text="FAZER ORÇAMENTO AGORA" />
          </div>
          <h2 className="mb-4">Vantagens</h2>
          <ul className="mb-4">
            <li>Maior eficiência TÉRMICA e ACÚSTICA;</li>
            <li>Redução do custo de energia elétrica;</li>
            <li>Maior durabilidade;</li>
            <li>Auto extinguível – não propaga fogo;</li>
            <li>Menos peso para sua cobertura.</li>
          </ul>
          <h2 className="mb-2">Aplicações</h2>
          <p className="mb-4">
            A BRASIL TELHAS TERMOACÚSTICAS possuem maior eficiência TÉRMICA e
            ACÚSTICA para você. Podendo ser na cor natural da chapa (aluzinco)
            ou com pintura PRÉ ou PÓS PINTADA. Outra grande vantagem da BRASIL
            TELHAS é que seu comprimento é definido pelo cliente, podendo ser
            cortadas conforme seus projetos.
          </p>
          <h2 className="mb-2">Ficha Técnica</h2>
          <p>
            A BRASIL TELHAS TERMOACÚSTICAS possuem maior eficiência TÉRMICA e
            ACÚSTICA para você. Podendo ser na cor natural da chapa (aluzinco)
            ou com pintura PRÉ ou PÓS PINTADA. Outra grande vantagem da BRASIL
            TELHAS é que seu comprimento é definido pelo cliente, podendo ser
            cortadas conforme seus projetos.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        {product.Images.map((image, index) => (
          <Image key={index} src={image} alt="Imagem" />
        ))}
      </div>
      <div className="flex justify-between mt-16">
        <div className="text-title">
          <p>Não perca tempo!</p>
          <p className="font-bold">
            Entre em contato agora mesmo com um de nossos representantes!
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <Button link="" text="Ver produtos" />
          </div>
          <div>
            <Button link="" text="Falar com representante" />
          </div>
        </div>
      </div>
    </div>
  );
}
