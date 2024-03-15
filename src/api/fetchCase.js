async function fetchCase() {
  const response = await fetch(
    "https://brasiltelhasmetalicas.com.br/api/cases/2?populate[Cases][populate]=*"
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { Cases } = attributes;

  return Cases[0].Case;
}

export default fetchCase;
