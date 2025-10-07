import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { useApi } from '../useApi';

export const useAbout = () => {
  const { about, setAbout } = useContext(DataContext);

  const [fetchData, { loading, error }] = useApi('about');

  if (about) {
    return about;
  }

  if (loading) {
    return null;
  }
  if (error) {
    console.error('Error', error);
    return null;
  }
  fetchData().then((r) => setAbout(r?.data?.about?.data?.attributes || { content: '' }));
  return null;
};
