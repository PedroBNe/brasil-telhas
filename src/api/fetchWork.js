async function fetchWork() {
  const response = await fetch(
    "http://localhost:1337/api/vagas/1/?populate[vagas][populate]=*"
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { vagas } = attributes;

  return vagas[0].vaga;
}

export default fetchWork;
