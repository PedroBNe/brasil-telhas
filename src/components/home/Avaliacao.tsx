import Image from "next/image";

import Profile from "@/assets/Avaliacao/profile.svg"
import Left from "@/assets/Avaliacao/menu-left.svg"
import Right from "@/assets/Avaliacao/menu-right.svg"

export default function Avaliacao(){
  return (
    <div className="flex">
      <div>
        <Image src={Left} alt="Esquerda" />
      </div>
      <div className="flex relative overflow-hidden w-[1200px] gap-[150px]">
        <div className="w-[300px]">
          <div className="flex">
            <div>
              <Image src={Profile} alt="Foto de perfil" />
            </div>
            <div>
              <h2>Ghost Company</h2>
              <p className="text-title">Agência de Publicidade</p>
            </div>
          </div>
          <div>
            <p className="text-justify font-medium">Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!</p>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="flex">
            <div>
              <Image src={Profile} alt="Foto de perfil" />
            </div>
            <div>
              <h2>Ghost Company</h2>
              <p className="text-title">Agência de Publicidade</p>
            </div>
          </div>
          <div>
            <p className="text-justify font-medium">Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!</p>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="flex">
            <div>
              <Image src={Profile} alt="Foto de perfil" />
            </div>
            <div>
              <h2>Ghost Company</h2>
              <p className="text-title">Agência de Publicidade</p>
            </div>
          </div>
          <div>
            <p className="text-justify font-medium">Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!</p>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="flex">
            <div>
              <Image src={Profile} alt="Foto de perfil" />
            </div>
            <div>
              <h2>Ghost Company</h2>
              <p className="text-title">Agência de Publicidade</p>
            </div>
          </div>
          <div>
            <p className="text-justify font-medium">Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!</p>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="flex">
            <div>
              <Image src={Profile} alt="Foto de perfil" />
            </div>
            <div>
              <h2>Ghost Company</h2>
              <p className="text-title">Agência de Publicidade</p>
            </div>
          </div>
          <div>
            <p className="text-justify font-medium">Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!</p>
          </div>
        </div>
      </div>
      <div>
        <Image src={Right} alt="Direita" />
      </div>
    </div>
  )
}