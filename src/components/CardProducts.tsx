import Image from "next/image";
import Link from "next/link";

interface CardProductsProps {
  img: any;
  text: string;
  title: string;
  btn: string;
  top: string;
  bottom: string;
  right: string;
}

const CardProducts: React.FC<CardProductsProps> = ({img, text, title, btn, top, bottom, right }) => {
  return (
    <div className="w-[25%] bg-product min-h-96 flex flex-col items-center p-6 relative">
      <div className={`flex justify-center absolute w-[160%] top-[${top}] bottom-[${bottom}] right-[${right}]`}>
        <Image src={img} alt="Produto" width={350} height={100} />
      </div>
      <div className="font-bold text-xl text-white mt-32">
        <h3>{title}</h3>
      </div>
      <div className="font-normal text-sm text-white">
        <p>{text}</p>
      </div>
      <div className="pt-8">
        <Link className="bg-white font-bold text-sm text-product rounded px-1 py-2 shadow-lg" href="">{btn}</Link>
      </div>
    </div>
  )
}

export default CardProducts