async function fetchCase() {
  const response = await fetch(
    "http://localhost:1337/api/cases/1?populate[Cases][populate]=*"
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { Cases } = attributes;

  return Cases[0].Case;
}

export default fetchCase;
