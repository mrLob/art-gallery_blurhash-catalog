import { useContext } from 'react';
import { Print } from '../../types/data';
import { useApi } from '../useApi';
import { DataContext } from '../../contexts/DataContext';
import { PrintApi } from '../../types/apiData';
import { convertApiToPrint } from '../../utils/convertApiToPrint';

export const usePrints = (category?: string): Print[] | null => {
  const { prints, setPrints } = useContext(DataContext);
  const [fetchData, { loading, error }] = useApi('prints');

  if (prints) {
    console.log(prints);
    return (
      (category &&
        prints.filter((print: Print) => print.category && print?.category.slug === category)) ||
      prints
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
    setPrints(
      r?.data?.prints?.data?.map((apiPrint: PrintApi) => convertApiToPrint(apiPrint)) || [],
    ),
  );
  return null;
};
