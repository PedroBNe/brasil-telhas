import Conheca from "@/components/Conheca";
import Social from "@/components/home/Social";
import Success from "@/components/home/Success";
import Testimony from "@/components/home/Testimony";
import ProductDetails from "@/components/product/ProductDetails";

export default function Produto() {
  return (
    <div className="flex flex-col gap-20">
      <Conheca />
      <ProductDetails />
      {/* <Success /> */}
      <Social />
      {/* <Testimony /> */}
    </div>
  );
}
