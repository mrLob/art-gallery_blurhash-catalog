import React, { useContext, useEffect, useState } from 'react';
import { Layout, PageBlocked } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { Paths } from '../../router/routes';
import { usePrints } from '../../hooks/api/usePrints';
import { DataContext } from '../../contexts/DataContext';
import { Category } from '../../types/data';
import { CategoryNavT } from '../../types/props';

const Prints = () => {
  const navigate = useNavigate();
  const { category: urlCategory } = useParams();

  const prints = usePrints(urlCategory);

  const { categories } = useContext(DataContext);
  const [currentCategory, setCurrentCategory] = useState<Category>();
  const [categoryNavs, setCategoryNavs] = useState<CategoryNavT[]>();
  useEffect(() => {
    if (categories && categories?.length > 0) {
      setCurrentCategory(categories?.find((item) => item.slug === urlCategory));
    }
    return () => {
      setCurrentCategory(undefined);
    };
  }, [categories, urlCategory]);

  useEffect(() => {
    if (categories && categories?.length > 0) {
      setCategoryNavs(
        categories?.map(({ name, slug }) => ({
          title: name,
          slug: slug,
          action: () => navigate(Paths.printsByCategory.replace(':category', slug)),
        })),
      );
    }
    return () => {
      setCategoryNavs(undefined);
    };
  }, [categories, navigate]);

  return (
    <Layout>
      {/*{(prints && prints?.length > 0 && (*/}
      {/*  <>*/}
      {/*    <CategoryNav*/}
      {/*      current={currentCategory?.slug}*/}
      {/*      items={categoryNavs ?? []}*/}
      {/*      onAll={() => navigate(Paths.prints)}*/}
      {/*    />*/}
      {/*    {currentCategory && <Description skipHtml>{currentCategory?.description}</Description>}*/}
      {/*    <MasonryLayout>*/}
      {/*      {prints?.map(({ title, price, preview, slug }, index) => (*/}
      {/*        <Picture*/}
      {/*          blurhash={preview?.blurhash}*/}
      {/*          onClick={() => slug && navigate(Paths.print.replace(':slug', slug))}*/}
      {/*          key={title + index}*/}
      {/*          title={title}*/}
      {/*          price={price}*/}
      {/*          visible*/}
      {/*          src={preview.url}*/}
      {/*        />*/}
      {/*      ))}*/}
      {/*    </MasonryLayout>*/}
      {/*  </>*/}
      {/*)) || <NoContent />}*/}
      <PageBlocked />
    </Layout>
  );
};

export default Prints;
