"use client";

import { motion } from "framer-motion";
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
    <div className="cardProduct w-full md:w-[32%] lg:w-[25%] bg-product hover:bg-product-select flex flex-col items-center p-6 relative shadow-2xl transition transform hover:scale-110">
      <div className={classe}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.6 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image src={img} alt="Produto" width={350} height={100} />
        </motion.div>
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
          className="bg-white font-bold text-[10px] xl:text-sm text-product rounded px-1 py-2 shadow-lg"
          href={`/produto/${link}`}
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default CardProducts;
