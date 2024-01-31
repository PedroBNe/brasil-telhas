import Image from "next/image";
import Link from "next/link";

interface CardProductsProps {
  img: any;
  text: string;
  title: string;
  btn: string;
  classe: string;
  margintop?: boolean;
  link: string;
}

const CardProducts: React.FC<CardProductsProps> = ({
  img,
  text,
  title,
  btn,
  classe,
  margintop = true,
  link,
}) => {
  return (
    <div className="w-full md:w-[32%] lg:w-[25%] bg-product hover:bg-product-select flex flex-col items-center p-6 relative shadow-2xl transition transform hover:scale-110">
      <div className={classe}>
        <Image
          className="transition transform hover:scale-110"
          src={img}
          alt="Produto"
          width={350}
          height={100}
        />
      </div>
      <div
        className={`font-bold text-xl text-white ${
          margintop ? "mt-[70%]" : "mt-[70%]"
        }`}
      >
        <h3>{title}</h3>
      </div>
      <div className="font-normal text-sm text-white text-justify">
        <p>{text}</p>
      </div>
      <div className="pt-8 shadow-2xl transition transform hover:scale-110">
        <Link
          className="bg-white font-bold text-sm text-product rounded px-1 py-2 shadow-lg"
          href={`/produto/${link}`}
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default CardProducts;
