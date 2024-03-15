// @ts-nocheck

"use client";

import { useEffect, useState } from "react";
import CardWork from "../CardWork";
import fetchWork from "@/api/fetchWork";

export default function Jobs() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const updateWork = async () => {
      const data = await fetchWork();
      setWork(data);
    };

    updateWork();
  }, []);

  return (
    <div className="mt-16" id="jobs">
      <div>
        <h1 className="mb-2">Oportunidades de Emprego</h1>
        <h2>Faça parte da nossa equipe!</h2>
      </div>
      <div className="flex justify-evenly mt-10 flex-col md:flex-row md:gap-0">
        {work.map((job) => (
          <div
            key={job.title}
            className="md:w-[210px] xl:w-[310px] h-[465px] mb-4"
          >
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
