async function fetchAva() {
  const response = await fetch(
    "https://brasiltelhasmetalicas.com.br/api/avaliacaos/2/?populate[avaliacao][populate]=*"
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { avaliacao } = attributes;

  return avaliacao[0].Avaliacao;
}

export default fetchAva;
