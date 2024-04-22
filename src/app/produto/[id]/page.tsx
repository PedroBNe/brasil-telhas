import Button from "@/components/Button";
import Image from "next/image";

import Conheca from "@/components/Conheca";
import Success from "@/components/home/Success";
import Social from "@/components/home/Social";
import Testimony from "@/components/home/Testimony";
import { productsArray } from "@/data/productsArray";

interface PageDetailProps {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: PageDetailProps) {
  const product = productsArray.find((p) => p.id === params.id);

  return (
    <div>
      <Conheca />
      <div className="mb-8">
        <div className="flex justify-between mb-10 flex-col md:flex-row ">
          <div className="md:w-[55%] flex flex-col justify-between">
            {product?.primaryImage ? (
              <Image
                src={product.primaryImage}
                alt="Primeira Imagem"
                width={766}
                height={367}
              />
            ) : null}
            {product?.primaryImage2 ? (
              <Image
                src={product.primaryImage2}
                alt="Segunda Imagem"
                width={739}
                height={511}
              />
            ) : null}
          </div>
          <div className="md:w-[45%]">
            <h1 className="mb-4">{product?.title}</h1>
            <p className="mb-2">{product?.description}</p>
            <p className="mb-4">{product?.description2}</p>
            <div className="mb-4">
              <Button
                link="https://api.whatsapp.com/send?phone=5548999040036"
                text="FAZER ORÇAMENTO AGORA"
              />
            </div>
            <h2 className="mb-4">Vantagens</h2>
            <ul className="mb-4">
              {product?.vantagens?.map((v, index) => (
                <li key={index}>
                  <p>{v}</p>
                </li>
              ))}
            </ul>
            <h2 className="mb-2">Sobre o produto</h2>
            <p className="mb-4">{product?.aplicacao}</p>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0">
          {product?.Images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Imagem"
              width={388}
              height={339}
            />
          ))}
        </div>
        <div className="flex justify-between mt-16 flex-col xl:flex-row gap-4 xl:gap-0">
          <div className="text-title">
            <p>Não perca tempo!</p>
            <p className="font-bold">
              Entre em contato agora mesmo com um de nossos representantes!
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <Button link="/produtos" text="Ver produtos" />
            </div>
            <div>
              <Button
                link="https://api.whatsapp.com/send?phone=5548999040036"
                text="Falar com representante"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Success /> */}
      <Social />
      {/* <Testimony /> */}
    </div>
  );
}
