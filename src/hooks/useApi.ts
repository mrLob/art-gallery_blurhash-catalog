import { useManualQuery } from 'graphql-hooks';

type ApiModel = 'categories' | 'prints' | 'paints' | 'about';

const ABOUT_QUERY = `{
  about {
    data {
      attributes {
        content
      }
    }
  }
}
`;
const PAINTS_QUERY = `{
  paints(pagination: { start: 0, limit: 100 },sort: "random:asc") {
    data {
      id
      attributes {
        title
        subtitle
        slug
        year
        price
        pictures {
          data{
            id
            attributes {
              name
              url
              previewUrl
              blurhash
            }
          }
        }
      }
    }
  }
}`;
const PRINTS_QUERY = `{
  prints(pagination: { start: 0, limit: 100 },sort: "random:desc") {
    data {
      id
      attributes {
        title
        subtitle
        slug
        category {
          data {
            attributes {
              slug
              name
              description
            }
          }
        }
        price
        pictures {
          data{
            id
            attributes {
              name
              url
              previewUrl
              blurhash
            }
          }
        }
      }
    }
  }
}`;

const CATEGORIES_QUERY = `{
  allCategories {
    name
    icon {url}
    slug
  }
}`;
export const useApi = (model: ApiModel, find?: string) => {
  const queries = {
    categories: CATEGORIES_QUERY,
    prints: PRINTS_QUERY,
    paints: PAINTS_QUERY,
    about: ABOUT_QUERY,
  };

  return useManualQuery(queries[model], {
    variables: {
      limit: 99,
      find,
    },
  });
};
