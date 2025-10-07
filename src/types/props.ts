export type Image = {
  path: string; // Путь к изображению
  height: number; // Высота изображения
  width: number; // Ширина изображения
};

export type Track = {
  totalHeight: number; // Общая высота трека
  images: Image[]; // Массив изображений в треке
};
export type CategoryNavT = { title: string; action: () => void; slug: string };
