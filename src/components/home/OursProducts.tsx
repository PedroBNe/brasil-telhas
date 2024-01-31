import CardProducts from "../CardProducts";
import Image from "next/image";

import Telha from "@/assets/Products/telha-foto.png";
import Cano from "@/assets/Products/cano.png";
import Parafuso from "@/assets/Products/parafuso.png";

export default function OursProducts() {
  return (
    <div>
      <div className="text-title">
        <p className="text-sm font-normal">
          Navegue em nosso catálogo e conheça
        </p>
        <h1 className="text-5xl font-bold">Nossos produtos</h1>
      </div>
      <div className="flex justify-between w-[90%] mx-auto mt-20 relative">
        <CardProducts
          link="/1"
          classe="flex justify-center absolute top-[-10px] w-[130%]"
          img={Telha}
          text="Explore nossa variedade de telhas metálicas duráveis, ideais para uma ampla gama de aplicações. Desde coberturas residenciais até projetos industriais"
          title="Telhas Metálicas"
          btn="NAVEGAR NO CATÁLOGO"
        />
        <CardProducts
          link="/2"
          classe="flex justify-center absolute top-[-20px]"
          img={Cano}
          text="Conheça nossa linha de perfis de alta qualidade, projetados para atender às demandas específicas de cada projeto. Oferecemos soluções personalizadas para garantir uma integração perfeita em qualquer estrutura."
          title="Perfis"
          btn="CONHECER MODELOS"
        />
        <CardProducts
          link="/3"
          classe="flex justify-center absolute top-[-20px]"
          img={Parafuso}
          text="Descubra a importância dos detalhes com nossa seleção de parafusos desenvolvidos para resistir às condições mais adversas. São a escolha confiável para fixação segura em qualquer aplicação."
          title="Parafusos"
          btn="CONSULTAR MODELOS"
        />
      </div>
    </div>
  );
}
