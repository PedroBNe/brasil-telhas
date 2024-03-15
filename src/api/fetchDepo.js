async function fetchDepo() {
  const response = await fetch(
    "https://brasiltelhasmetalicas.com.br/api/depoimentos/2/?populate[depoimentos][populate]=*"
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { depoimentos } = attributes;

  return depoimentos[0].Depoimento;
}

export default fetchDepo;
