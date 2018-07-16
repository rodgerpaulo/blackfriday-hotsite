export const getProducts = () => {
  return async(dispatchEvent, getState) => {
    let response = await fetch('/data/products.json');
    return response.json();
  };
};
