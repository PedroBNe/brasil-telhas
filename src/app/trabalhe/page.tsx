import BenefitsWork from "@/components/trabalhe/BenefitsWork";
import Jobs from "@/components/trabalhe/Jobs";
import VemTrabalhar from "@/components/trabalhe/VemTrabalhar";

export default function Trabalhe() {
  return (
    <div className="mt-8">
      <VemTrabalhar />
      <BenefitsWork />
      <Jobs />
    </div>
  );
}
