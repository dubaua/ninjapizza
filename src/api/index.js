// needed check for version
const prepareProduct = product => ({
  ...product,
  versions: product.versions.map((version, index) => ({ ...version, isChosen: index === 0 })),
  isInCart: false,
});

const get = key =>
  fetch(`/api/collections/get/${key}?token=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(blob => blob.entries.map(prepareProduct));

export default { get };
