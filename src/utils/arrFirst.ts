export const arrFirst = (items: any[], search: string, field = 'slug') => {
  return items.find((item) => item[field] === search);
};
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];

  shuffledArray.forEach((_, index) => {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledArray[index], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[index],
    ];
  });

  return shuffledArray;
};
