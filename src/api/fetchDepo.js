async function fetchDepo() {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/depoimentos/1/?populate[depoimentos][populate]=*`
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { depoimentos } = attributes;

  return depoimentos[0].Depoimento;
}

export default fetchDepo;
