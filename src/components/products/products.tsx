"use client";

import { useEffect, useState } from "react";
import CardProducts from "../CardProducts";

import fetchProductData from "@/api/fetchData";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const updateProducts = async () => {
      const data = await fetchProductData();
      setProducts(data);
    };

    updateProducts();
  }, []);

  console.log(products);

  return (
    <div className="flex items-center flex-col">
      <h1 className="mb-12">Produtos</h1>
      <div className="w-[60%] md:w-full flex flex-wrap justify-between gap-8">
        {products.map((product) => (
          <CardProducts
            key={product.id}
            img={product.imageUrl}
            btn={product.TextoBotao}
            title={product.title}
            text={product.type}
            classe="flex justify-center absolute top-[-10px] w-[130%]"
            link={product.id}
          />
        ))}
      </div>
    </div>
  );
}
