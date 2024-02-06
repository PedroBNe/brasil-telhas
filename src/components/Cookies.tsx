import Link from "next/link";

export default function Cookies() {
  return (
    <div>
      <div>
        <b>Hm... Cookies!</b>
        <p>
          🍪 Usamos cookies para garantir que você tenha a melhor experiência em
          nosso site.
        </p>
        <Link href="/">Saiba Mais</Link>
        <button className="bg-[#254977]">Aceitar</button>
      </div>
    </div>
  );
}
