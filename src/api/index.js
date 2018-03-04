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

const sendForm = form =>
  fetch('/order/', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      form,
    }),
  })
    .then(response => response.json())
    // eslint-disable-next-line no-console
    .then(blob => console.log(blob));

const AUTHOR_API_KEY = 'account-a308bd61829abebc2d4fb57b7b3428';

const saveOrder = order =>
  fetch(`/api/collections/save/orders?token=${AUTHOR_API_KEY}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: order,
    }),
  })
    .then(response => response.json())
    // eslint-disable-next-line no-console
    .then(blob => console.log(blob));

export default { get, sendForm, saveOrder };
