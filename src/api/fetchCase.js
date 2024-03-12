async function fetchCase() {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/cases/1?populate[Cases][populate]=*"`
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { Cases } = attributes;

  return Cases[0].Case;
}

export default fetchCase;
