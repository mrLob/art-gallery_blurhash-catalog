import { PaintApi, PicturesApiData } from '../types/apiData';
import { Image, Paint } from '../types/data';
import { API_URL } from './constants';

export const convertApiToPaint = (paintApi: PaintApi): Paint => {
  const pictures: Image[] = paintApi.attributes?.pictures?.data?.map(
    (pictureData: PicturesApiData) => {
      const pictureAttributes = pictureData.attributes;
      return {
        id: pictureData.id,
        name: pictureAttributes.name,
        url: API_URL + pictureAttributes.url,
        previewUrl: pictureAttributes.previewUrl,
        blurhash: pictureAttributes?.blurhash,
      };
    },
  );

  return {
    title: paintApi.attributes.title,
    subtitle: paintApi.attributes.subtitle,
    slug: paintApi.attributes.slug,
    preview: {
      name: paintApi.attributes.pictures?.data[0]?.attributes.name,
      url: API_URL + paintApi.attributes.pictures?.data[0]?.attributes.url,
      previewUrl: API_URL + paintApi.attributes.pictures?.data[0]?.attributes.previewUrl,
      blurhash: paintApi.attributes.pictures?.data[0]?.attributes?.blurhash,
    },
    year: `${paintApi.attributes?.year}`,
    price: paintApi.attributes.price ? parseFloat(paintApi.attributes.price) : undefined,
    pictures: pictures,
  };
};
