async function fetchWork() {
  const response = await fetch(
    "https://brasiltelhasmetalicas.com.br/api/vagas/1/?populate[vagas][populate]=*"
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { vagas } = attributes;

  return vagas[0].vaga;
}

export default fetchWork;
