import CardProducts from "../CardProducts";

import Telha from "@/assets/Products/telha-foto.png";
import Cano from "@/assets/Products/perfil.png";
import Parafuso from "@/assets/Products/parafuso.png";

export default function OursProducts() {
  return (
    <div>
      <div className="text-title">
        <p className="text-sm font-normal">
          Navegue em nosso catálogo e conheça
        </p>
        <h1 className="text-3xl md:text-5xl font-bold">Nossos produtos</h1>
      </div>
      <div className="cardProduct-container flex flex-col md:flex-row justify-between w-[80%] md:w-[90%] mx-auto mt-10 md:mt-20 relative gap-6 md:gap-0">
        <CardProducts
          link="/produtos"
          classe="flex justify-center absolute top-[-10px] w-[110%] md:w-[130%]"
          img={Telha}
          text="A BRASIL TELHAS EPS são compostas por uma 
          Telha Trapezoidal ou Ondulada, com uma 
          camada de EPS (isopor) colada em sua face 
          inferior. Podendo ser na cor natural da chapa 
          (aluzinco) ou com pintura PRÉ ou PÓS 
          PINTADA."
          title="Telhas Metálicas"
          btn="NAVEGAR NO CATÁLOGO"
        />
        <CardProducts
          link="https://api.whatsapp.com/send?phone=5548999040036"
          classe="flex justify-center absolute top-[-20px]"
          img={Cano}
          text="Conheça nossa linha de perfis de alta qualidade, projetados para atender às demandas específicas de cada projeto. Oferecemos soluções personalizadas para garantir uma integração perfeita em qualquer estrutura."
          title="Perfis"
          btn="CONHECER MODELOS"
        />
        <CardProducts
          link="https://api.whatsapp.com/send?phone=5548999040036"
          classe="flex justify-center absolute top-[-20px]"
          img={Parafuso}
          text="Produtos feitos em aço de baixo carbono C1022 
          com Revestimento RUSPERT, superior ao galvanizado. As arruelas de vedação são de EPDM, 
          um material resistente aos raios ultra violeta e a 
          altas temperaturas"
          title="Parafusos"
          btn="CONSULTAR MODELOS"
        />
      </div>
    </div>
  );
}
