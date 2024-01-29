import CardProducts from "../CardProducts";
import { productsArray } from "@/data/productsArray";

export default function Products() {
  const products = productsArray;

  return (
    <div className="">
      <h1 className="mb-12">Produtos</h1>
      <div className="flex flex-wrap justify-between gap-8">
        {products.map((product) => (
          <CardProducts
            key={product.id}
            img={product.img}
            btn={product.btn}
            title={product.title}
            text={product.type}
            classe="flex justify-center absolute top-[-10px] w-[130%]"
            margintop={product.falsed}
            link={product.id}
          />
        ))}
      </div>
    </div>
  );
}
