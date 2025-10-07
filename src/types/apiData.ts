export type PaintApi = {
  id: string | number;
  attributes: {
    title: string;
    slug: string;
    subtitle: string;
    year?: number;
    price: string;
    pictures: {
      data: PicturesApiData[];
    };
  };
};
export type PrintApi = {
  id: number;
  attributes: {
    title: string;
    subtitle?: string;
    category: {
      data: CategoryApi;
    };
    slug: string;
    price: string;
    pictures: { data: PicturesApiData[] };
  };
};

export type PicturesApiData = {
  id: number;
  attributes: {
    name: string;
    url: string;
    previewUrl?: string;
    blurhash?: string;
  };
};

export type CategoryApi = {
  id: number;
  attributes: {
    slug: string;
    name: string;
    description: string;
  };
};
