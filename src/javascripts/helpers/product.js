import { productImageUrl } from 'javascripts/constants/urls';

export const getFirstImageUrl = product => {
  const firstItem = product.items[0];
  let imageName = null;

  if (firstItem) {
    imageName = productImageUrl + firstItem.images[0].imageUrl;
  }

  return imageName;
};
