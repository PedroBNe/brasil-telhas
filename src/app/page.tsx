import AreWe from "@/components/home/AreWe";
import Avaliacao from "@/components/home/Avaliacao";
import Benefits from "@/components/home/Benefits";
import OursProducts from "@/components/home/OursProducts";
import Question from "@/components/home/Questions";
import Social from "@/components/home/Social";
import Success from "@/components/home/Success";
import Testimony from "@/components/home/Testimony";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <div className="my-10 md:my-20 flex flex-col gap-8 md:gap-20">
      <Welcome />
      <OursProducts />
      <Benefits />
      {/* <Success /> */}
      <Social />
      {/* <Testimony /> */}
      <AreWe />
      <Question />
      {/* <Avaliacao /> */}
    </div>
  );
}
