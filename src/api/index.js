/* eslint-disable no-param-reassign */
const prepareProduct = (product) => {
  if (typeof product.versions === 'undefined') {
    return product;
  }
  // code below converts array of versions to hashMap
  return {
    ...product,
    versions: product.versions.reduce((hashMap, version, index) => {
      hashMap[index] = {
        id: index,
        measure: version.value.measure,
        price: version.value.price,
      };
      return hashMap;
    }, {}),
    chosenVersion: 0,
  };
};

const get = key =>
  fetch(`/api/collections/get/${key}?token=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(blob => blob.entries.map(prepareProduct));

export default { get };
