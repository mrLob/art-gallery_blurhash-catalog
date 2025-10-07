import { PicturesApiData, PrintApi } from '../types/apiData';
import { Category, Image, Print } from '../types/data';
import { API_URL } from './constants';

export const convertApiToPrint = (printApi: PrintApi): Print => {
  const categoryApi = printApi.attributes.category.data;
  const category: Category =
    (categoryApi && {
      name: categoryApi.attributes.name,
      slug: categoryApi.attributes.slug,
      description: categoryApi.attributes.description,
    }) ||
    undefined;

  const pictures: Image[] = printApi.attributes.pictures.data.map(
    (pictureData: PicturesApiData) => {
      return {
        id: pictureData.id,
        name: pictureData.attributes.name,
        url: API_URL + pictureData.attributes.url,
        previewUrl: API_URL + pictureData.attributes.previewUrl,
        blurhash: pictureData.attributes?.blurhash,
      };
    },
  );

  return {
    title: printApi.attributes?.title,
    subtitle: printApi.attributes?.subtitle,
    slug: printApi.attributes.slug,
    preview: {
      url: API_URL + printApi.attributes.pictures.data[0].attributes.url,
      blurhash: printApi.attributes.pictures.data[0].attributes?.blurhash,
    },
    category: category,
    price: printApi.attributes?.price ? parseFloat(printApi.attributes.price) : undefined,
    pictures: pictures,
  };
};
