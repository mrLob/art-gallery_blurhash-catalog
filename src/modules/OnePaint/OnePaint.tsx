import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Product } from '../../components';
import usePaint from '../../hooks/api/usePaint';
import { useOpenGraph } from '../../hooks/useOpenGraph';

const OnePaint = () => {
  const { slug } = useParams();
  const selected = usePaint(slug);
  useOpenGraph(selected?.title || 'Paint', selected?.subtitle, selected?.preview?.url);

  return (
    <Layout>
      {selected && (
        <Product
          title={selected?.title}
          subtitle={selected?.subtitle}
          category={selected?.year}
          price={selected?.price}
          gallery={selected?.pictures}
        />
      )}
    </Layout>
  );
};

export default OnePaint;
