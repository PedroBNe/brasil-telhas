import Image from "next/image";
import Button from "../Button";

import Facebook from "@/assets/Social/facebook.svg";
import Instagram from "@/assets/Social/instagram.svg";
import Google from "@/assets/Social/google.svg";
import Link from "next/link";

export default function Social() {
  return (
    <div className="bg-social flex justify-around h-40 w-[112%] ml-[-7%] p-[4%]">
      <div className="w-[30%] text-white flex flex-col justify-center">
        <p>Veja mais casos como esses em nossas</p>
        <h1 className="text-white">Redes Sociais</h1>
      </div>
      <div className="w-[20%] flex justify-between">
        <Link href="https://www.facebook.com/BrasilTelhasMetalicas01">
          <Image
            width={50}
            height={50}
            src={Facebook}
            alt="Facebook"
            className="transition transform hover:scale-125"
          />
        </Link>
        <Link href="https://www.instagram.com/brasil.telhas/">
          <Image
            width={50}
            height={50}
            src={Instagram}
            alt="Instagram"
            className="transition transform hover:scale-125"
          />
        </Link>
        <Link href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LKoyzzMyMzEzYLRSNaiwNDUyMk6xSDRNNbEwskw2twIKWaSYJJuYJVqmJhskJadZeEkkFSUWZ-YolKTmZCQWK-SmlhxemJOZnFgMAH-AGOo&q=brasil+telhas+met%C3%A1licas&rlz=1C1FKPE_pt-PTBR1080BR1080&oq=bra&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTITCAMQLhiDARjHARixAxjRAxiABDIGCAQQRRg9MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTczNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x95223d8a5e4829c7:0x98d4c46a9ec0bcf8,1,,,,">
          <Image
            width={50}
            height={50}
            src={Google}
            alt="Google"
            className="transition transform hover:scale-125"
          />
        </Link>
      </div>
      <div className="w-[30%] flex items-center gap-4 text-sm font-bold text-title">
        <Link
          className="min-w-[50%] bg-white rounded-md p-3 whitespace-nowrap flex justify-center"
          href="/sobre"
        >
          Saber mais
        </Link>
        <Link
          className="min-w-[50%] bg-white rounded-md p-3 whitespace-nowrap flex justify-center"
          href="https://api.whatsapp.com/send?phone=5548999040036"
        >
          Falar com consultor
        </Link>
      </div>
    </div>
  );
}
