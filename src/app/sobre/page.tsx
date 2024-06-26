import Expansion from "@/components/sobre/Expansion";
import TalentsForm from "@/components/trabalhe/TalentsForm";
import WhoWeAre from "@/components/sobre/WhoWeAre";

export default function Sobre() {
  return (
    <div className="my-20 flex flex-col gap-20">
      <WhoWeAre />
      <Expansion />
    </div>
  );
}
