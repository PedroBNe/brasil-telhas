import Image from "next/image";
import Link from "next/link";

import whatsapp from "@/assets/whatsappLink.png";

export default function Whatsap() {
  return (
    <div className="cursor-pointer">
      <Link href="https://api.whatsapp.com/send?phone=5548999040036">
        <Image
          src={whatsapp}
          alt="whatsapp"
          width={60}
          height={60}
          className=" rounded-[30px]"
        />
      </Link>
    </div>
  );
}
