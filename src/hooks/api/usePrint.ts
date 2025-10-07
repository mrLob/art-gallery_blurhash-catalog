import { useContext } from 'react';
import { useApi } from '../useApi';
import { DataContext } from '../../contexts/DataContext';
import { arrFirst } from '../../utils/arrFirst';
import { PrintApi } from '../../types/apiData';
import { convertApiToPrint } from '../../utils/convertApiToPrint';
import { Print } from '../../types/data';

const usePrint = (find?: string): Print | null => {
  const { prints, setPrints } = useContext(DataContext);

  const [fetchData, { loading, error }] = useApi('prints');
  if (!find) return null;

  if (prints && prints.length > 0) {
    const paint = arrFirst(prints, find);
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
    setPrints(
      r?.data?.prints?.data?.map((apiPrint: PrintApi) => convertApiToPrint(apiPrint)) || [],
    ),
  );
  return null;
};

export default usePrint;
