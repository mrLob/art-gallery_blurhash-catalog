import { useContext } from 'react';
import { useApi } from '../useApi';
import { Paint } from '../../types/data';
import { DataContext } from '../../contexts/DataContext';
import { arrFirst } from '../../utils/arrFirst';
import { convertApiToPaint } from '../../utils/convertApiToPaint';
import { PaintApi } from '../../types/apiData';

const usePaint = (find?: string): Paint | null => {
  const { paints, setPaints } = useContext(DataContext);

  const [fetchData, { loading, error }] = useApi('paints');
  if (!find) return null;

  if (paints && paints.length > 0) {
    const paint = arrFirst(paints, find);
    if (paint) {
      return paint;
    }
  }

  if (loading) {
    return null;
  }
  if (error) {
    console.error('Error', error);
    return null;
  }
  fetchData().then((r) =>
    setPaints(
      r?.data?.paints?.data?.map((apiPaint: PaintApi) => convertApiToPaint(apiPaint)) || [],
    ),
  );
  return null;
};

export default usePaint;
