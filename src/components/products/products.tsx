import CardProducts from "../CardProducts";
import { productsArray } from "@/data/productsArray";

export default function Products() {
  const products = productsArray;

  return (
    <div className="flex items-center flex-col">
      <h1 className="mb-12">Produtos</h1>
      <div className="w-[60%] md:w-full flex flex-wrap justify-between gap-8">
        {products.map((product) => (
          <CardProducts
            key={product.id}
            img={product.img}
            btn={product.btn}
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
