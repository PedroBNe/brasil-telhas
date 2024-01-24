import Image from "next/image";

import Local from "@/assets/Trabalhe/Place Marker.png";
import Coin from "@/assets/Trabalhe/Coins.png";
import Pen from "@/assets/Trabalhe/Ball Point Pen.png";
import Certificate from "@/assets/Trabalhe/Certificate (1).png";
import Link from "next/link";

interface CardWorkProps {
  title: string;
  description: string;
  local: string;
  vagas: string;
  sal: string;
  type: string;
  clt: string;
  benefits?: string;
  analise: string;
}

export default function CardWork({
  title,
  description,
  local,
  vagas,
  sal,
  type,
  clt,
  benefits,
  analise,
}: CardWorkProps) {
  return (
    <div className="bg-product w-full h-full flex justify-center items-center">
      <div className="w-[80%] flex flex-col items-center text-center text-white">
        <div>
          <p className="font-bold mb-2">{title}</p>
        </div>
        <div className="w-full text-justify">
          <p className="text-[10px]">{description}</p>
        </div>
        <div className="w-full text-[10px]">
          <div className="flex justify-between">
            <div className="flex w-[50%] gap-2 py-3">
              <div className="h-[15px]">
                <Image src={Local} alt="Local" width={15} height={15} />
              </div>
              <p className="text-[10px]">{local}</p>
            </div>
            <div className="flex w-[50%] gap-2 py-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_43_2117)">
                    <path
                      d="M12.5 3.75H10V2.5C10 1.80625 9.44375 1.25 8.75 1.25H6.25C5.55625 1.25 5 1.80625 5 2.5V3.75H2.5C1.80625 3.75 1.25625 4.30625 1.25625 5L1.25 11.875C1.25 12.5688 1.80625 13.125 2.5 13.125H12.5C13.1938 13.125 13.75 12.5688 13.75 11.875V5C13.75 4.30625 13.1938 3.75 12.5 3.75ZM8.75 3.75H6.25V2.5H8.75V3.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_43_2117">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[10px]">{vagas}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[50%] gap-2 py-3">
              <div className="h-[15px]">
                <Image src={Coin} alt="Valor" width={15} height={15} />
              </div>
              <p className="text-[10px]">R$ {sal}</p>
            </div>
            <div className="flex w-[50%] gap-2 py-3">
              <div className="h-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_43_2111)">
                    <path
                      d="M5.10625 3.5625L0.625 6.55V13.125H3.75V8.125H6.25V13.125H9.375V6.40625L5.10625 3.5625Z"
                      fill="white"
                    />
                    <path
                      d="M6.25 1.875V2.81875L7.5 3.65L8.58125 4.375H9.375V4.90625L10.625 5.74375V6.875H11.875V8.125H10.625V9.375H11.875V10.625H10.625V13.125H14.375V1.875H6.25ZM11.875 5.625H10.625V4.375H11.875V5.625Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_43_2111">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[10px]">{type}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-[50%] gap-2 py-3">
              <div className="h-[15px]">
                <Image src={Pen} alt="Local" width={15} height={15} />
              </div>
              <p className="text-[10px]">{clt}</p>
            </div>
            {benefits ? (
              <div className="flex w-[50%] gap-2 py-3">
                <div className="h-[15px]">
                  <Image
                    src={Certificate}
                    alt="Certificado"
                    width={15}
                    height={15}
                  />
                </div>
                <p className="text-[10px]">{benefits}</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full text-justify my-4">
          <p className="text-[10px]">{analise}</p>
        </div>
        <div>
          <div className="bg-white rounded w-[218px] h-[50px] flex items-center justify-center">
            <Link
              href=""
              className="w-full h-full flex justify-center items-center"
            >
              <p className="font-bold text-title py">ME CANDIDATAR</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
