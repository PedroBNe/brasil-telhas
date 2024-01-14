import Benefits from "@/components/home/Benefits";
import OursProducts from "@/components/home/OursProducts";
import Social from "@/components/home/Social";
import Success from "@/components/home/Success";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <div className="my-20 flex flex-col gap-20">
      <Welcome />
      <OursProducts />
      <Benefits />
      <Success />
      <Social />
    </div>
  )
}
