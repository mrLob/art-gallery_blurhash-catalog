import React, { useContext, useMemo } from 'react';
import { CategoryNav, Layout, MasonryLayout, NoContent, Picture } from '../../components';
import { usePaints } from '../../hooks/api/usePaints';
import { useNavigate, useParams } from 'react-router-dom';
import { Paths } from '../../router/routes';
import { DataContext } from '../../contexts/DataContext';
import { shuffleArray } from '../../utils/arrFirst';

const Paints = () => {
  const { year: urlYear } = useParams();
  const paints = usePaints(urlYear);
  const navigate = useNavigate();
  const { years } = useContext(DataContext);

  const categoryNavs = useMemo(
    () =>
      years?.map((item) => ({
        title: item,
        slug: item,
        action: () => navigate(Paths.paintByYear.replace(':year', item)),
      })),
    [years, navigate],
  );
  return (
    <Layout>
      {(paints && paints.length > 0 && (
        <>
          <CategoryNav
            current={urlYear}
            items={categoryNavs ?? []}
            onAll={() => navigate(Paths.paints)}
          />
          <MasonryLayout>
            {shuffleArray(paints)?.map((item, index) => (
              <Picture
                onClick={() => item?.slug && navigate(Paths.paint.replace(':slug', item?.slug))}
                key={item.title + index}
                src={item.preview.url}
                blurhash={item.preview?.blurhash}
                title={item.title}
              />
            ))}
          </MasonryLayout>
        </>
      )) || <NoContent />}
    </Layout>
  );
};

export default Paints;
