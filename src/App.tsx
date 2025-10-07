import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './styledGlobal';
import { rootRouter } from './router';
import { DataContext } from './contexts/DataContext';
import { About, Category, Paint, Print, Year } from './types/data';

function App() {
  const [about, setAbout] = useState<About>();
  const [paints, setPaints] = useState<Paint[]>();
  const [prints, setPrints] = useState<Print[]>();
  const [categories, setCategories] = useState<Category[]>();
  const [years, setYears] = useState<Year[]>();

  useEffect(() => {
    setYears(
      paints
        ?.map((item) => item?.year)
        .filter((object, index, self) => index === self.findIndex((o) => o === object))
        .sort()
        .reverse(),
    );
  }, [paints]);
  useEffect(() => {
    if (prints && prints?.length > 0) {
      setCategories(
        prints
          ?.map((item) => item?.category)
          .filter(
            (object, index, self) =>
              self && index === self.findIndex((o) => o && o?.slug === object?.slug),
          ),
      );
    }
  }, [prints]);

  return (
    <>
      <GlobalStyles />
      <DataContext.Provider
        value={{
          about,
          paints,
          prints,
          categories,
          years,
          setPaints,
          setPrints,
          setCategories,
          setAbout,
          setYears,
        }}
      >
        <RouterProvider router={rootRouter} />
      </DataContext.Provider>
    </>
  );
}

export default App;
