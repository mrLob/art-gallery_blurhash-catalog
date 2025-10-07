export type Paint = {
  title: string;
  subtitle?: string;
  slug: string;
  preview: Image;
  year: string;
  price?: number;
  pictures: Image[];
};

export type Print = {
  title: string;
  subtitle?: string;
  slug: string;
  preview: Image;
  category: Category;
  price?: number;
  pictures: Image[];
};

export type Category = {
  name: string;
  slug: string;
  description: string;
};
export type Year = string;

export type About = {
  content: string;
};

export type Image = {
  id?: string | number;
  name?: string;
  url: string;
  previewUrl?: string;
  blurhash?: string;
};
