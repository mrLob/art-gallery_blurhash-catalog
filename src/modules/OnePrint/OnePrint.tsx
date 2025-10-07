import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Product } from '../../components';
import usePrint from '../../hooks/api/usePrint';

const OnePrint = () => {
  const { slug } = useParams();
  const selected = usePrint(slug);

  return (
    <Layout>
      {selected && (
        <Product
          title={selected?.title}
          subtitle={selected?.subtitle}
          category={selected?.category && selected?.category?.name + ' Print'}
          price={selected?.price}
          gallery={selected?.pictures}
        />
      )}
    </Layout>
  );
};

export default OnePrint;
