import CardWork from "../CardWork";

export default function Jobs() {
  const Jobs = [
    {
      title: "Operador de Máquina",
      description:
        "As responsabilidades típicas incluem carregar e descarregar materiais, ajustar configurações da máquina conforme necessário, realizar verificações de manutenção preventiva, resolver problemas operacionais básicos e garantir que os produtos fabricados atendam às especificações exigidas.",
      local: "Sombrio - SC",
      vagas: "1 vaga",
      sal: "2.300,00",
      type: "Presencial",
      clt: "CLT",
      benefits: "+ Benefícios",
      analise:
        "Será analisado experiência em produção e conhecimentos mecânicos.",
    },
    {
      title: "Auxilir Financeiro",
      description:
        "O auxiliar financeiro desempenha um papel crucial na manutenção da integridade financeira da empresa, contribuindo para a organização, precisão e eficiência das operações financeiras cotidianas.",
      local: "Sombrio - SC",
      vagas: "1 vaga",
      sal: "1.400,00",
      type: "Home Office",
      clt: "Terceirizado",
      benefits: "",
      analise:
        "Será analisado experiência em contabilidade e gestão financeira.",
    },
    {
      title: "Auxilir Financeiro",
      description:
        "O auxiliar financeiro desempenha um papel crucial na manutenção da integridade financeira da empresa, contribuindo para a organização, precisão e eficiência das operações financeiras cotidianas.",
      local: "Sombrio - SC",
      vagas: "1 vaga",
      sal: "1.400,00",
      type: "Home Office",
      clt: "Terceirizado",
      benefits: "",
      analise:
        "Será analisado experiência em contabilidade e gestão financeira.",
    },
  ];

  return (
    <div className="mt-16">
      <div>
        <h1 className="mb-2">Oportunidades de Emprego</h1>
        <h2>Faça parte da nossa equipe!</h2>
      </div>
      <div className="flex justify-evenly mt-10">
        {Jobs.map((job) => (
          <div key={job.title} className="w-[310px] h-[465px]">
            <CardWork
              title={job.title}
              description={job.description}
              local={job.local}
              vagas={job.vagas}
              sal={job.sal}
              type={job.type}
              clt={job.clt}
              benefits={job.benefits}
              analise={job.analise}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
