async function fetchProductData() {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/Produtos/1/?populate[produtos][populate]=*`
  );
  const { data } = await response.json();
  const { attributes } = data;
  const { produtos } = attributes;

  const productsWithImages = produtos[0].product.map((prod) => {
    const imageUrl = prod.image ? prod.image[0].image.url : null;
    return {
      ...prod,
      imageUrl,
    };
  });

  return productsWithImages;
}

export default fetchProductData;
