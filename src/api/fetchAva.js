async function fetchAva() {
  const response = await fetch(
    "http://localhost:1337/api/avaliacaos/1/?populate[avaliacao][populate]=*"
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { avaliacao } = attributes;

  return avaliacao[0].Avaliacao;
}

export default fetchAva;
