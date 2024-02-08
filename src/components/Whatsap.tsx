import Image from "next/image";
import Link from "next/link";

import whatsapp from "@/assets/whatsappLink.png";

export default function Whatsap() {
  return (
    <div className="cursor-pointer fixed bottom-4 right-4 z-30">
      <Link href="https://api.whatsapp.com/send?phone=5548999040036">
        <Image
          src={whatsapp}
          alt="whatsapp"
          width={70}
          height={70}
          className=" rounded-[40px]"
        />
      </Link>
    </div>
  );
}
