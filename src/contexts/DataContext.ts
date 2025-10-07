import { createContext } from 'react';
import { About, Category, Paint, Print, Year } from '../types/data';

type IDataContext = {
  paints?: Paint[];
  prints?: Print[];
  categories?: Category[];
  years?: Year[];
  about?: About;
  setPrints: (values?: Print[]) => void;
  setPaints: (values?: Paint[]) => void;
  setCategories: (values?: Category[]) => void;
  setAbout: (values?: About) => void;
  setYears: (values?: Year[]) => void;
};

export const DataContext = createContext<IDataContext>({
  setPrints: () => {},
  setPaints: () => {},
  setCategories: () => {},
  setAbout: () => {},
  setYears: () => {},
});
