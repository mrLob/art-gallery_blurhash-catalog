import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Paths } from './routes';
import { About, OnePaint, OnePrint, Paints, Prints } from '../modules';

export const rootRouter = createBrowserRouter([
  { path: Paths.paints, element: <Paints /> },
  { path: Paths.paintByYear, element: <Paints /> },
  { path: Paths.paint, element: <OnePaint /> },
  { path: Paths.prints, element: <Prints /> },
  { path: Paths.printsByCategory, element: <Prints /> },
  { path: Paths.print, element: <OnePrint /> },
  { path: Paths.about, element: <About /> },
]);
