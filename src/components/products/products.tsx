import Telha from "@/assets/Products/telha-foto.png";
import CardProducts from "../CardProducts";

export default function Products() {
  const products = [
    {
      img: Telha,
      title: "Telha Sanduíche1",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
    {
      img: Telha,
      title: "Telha Sanduíche2",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
    {
      img: Telha,
      title: "Telha Sanduíche3",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
    {
      img: Telha,
      title: "Telha Sanduíche4",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
    {
      img: Telha,
      title: "Telha Sanduíche5",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
    {
      img: Telha,
      title: "Telha Sanduíche6",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
    {
      img: Telha,
      title: "Telha Sanduíche7",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
    {
      img: Telha,
      title: "Telha Sanduíche8",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
    {
      img: Telha,
      title: "Telha Sanduíche9",
      type: "Telhas Metálicas",
      btn: "VER PRODUTO",
      falsed: false,
    },
  ];

  return (
    <div className="">
      <h1 className="mb-12">Produtos</h1>
      <div className="flex flex-wrap justify-between gap-8">
        {products.map((product) => (
          <CardProducts
            key={product.title}
            img={product.img}
            btn={product.btn}
            title={product.title}
            text={product.type}
            classe="flex justify-center absolute top-[-10px] w-[130%]"
            margintop={product.falsed}
          />
        ))}
      </div>
    </div>
  );
}
