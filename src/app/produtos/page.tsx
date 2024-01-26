import Conheca from "@/components/Conheca";
import Benefits from "@/components/home/Benefits";
import Social from "@/components/home/Social";
import Success from "@/components/home/Success";
import Testimony from "@/components/home/Testimony";
import Products from "@/components/products/products";

export default function Produtos() {
  return (
    <div className="flex flex-col gap-20">
      <Conheca />
      <Products />
      <Success />
      <Social />
      <Testimony />
    </div>
  );
}
