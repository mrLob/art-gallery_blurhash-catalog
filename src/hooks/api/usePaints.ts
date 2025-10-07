import { useContext } from 'react';
import { Paint } from '../../types/data';
import { useApi } from '../useApi';
import { DataContext } from '../../contexts/DataContext';
import { convertApiToPaint } from '../../utils/convertApiToPaint';
import { PaintApi } from '../../types/apiData';

export const usePaints = (category?: string): Paint[] | null => {
  const { paints, setPaints } = useContext(DataContext);
  const [fetchData, { loading, error }] = useApi('paints');

  if (paints) {
    return (
      (category && paints.filter((paint: Paint) => paint.year && paint.year === category)) || paints
    );
  }
  if (loading) {
    return null;
  }
  if (error) {
    console.error(error);
    return null;
  }
  fetchData().then((r) =>
    setPaints(
      r?.data?.paints?.data?.map((apiPaint: PaintApi) => convertApiToPaint(apiPaint)) || [],
    ),
  );
  return null;
};
