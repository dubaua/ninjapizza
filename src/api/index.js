// needed check for version
const prepareProduct = (product) => {
  if (typeof product.versions === 'undefined') {
    return product;
  }
  return {
    ...product,
    versions: product.versions.map((version, index) => ({
      id: index,
      measure: version.value.measure,
      price: version.value.price,
      isChosen: index === 0,
    })),
  };
};

const get = key =>
  fetch(`/api/collections/get/${key}?token=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(blob => blob.entries.map(prepareProduct));

export default { get };
