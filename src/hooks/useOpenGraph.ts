import { useEffect } from 'react';

export const useOpenGraph = (title: string, description?: string, imageUrl?: string) => {
  useEffect(() => {
    const metaTags = Array.from(document.getElementsByTagName('meta'));
    metaTags.forEach((metaTag) => {
      const property = metaTag.getAttribute('property');
      if (property === 'og:title') {
        metaTag.setAttribute('content', title);
      }
      if (property === 'og:description' && description) {
        metaTag.setAttribute('content', description);
      }
      if (property === 'og:image' && imageUrl) {
        metaTag.setAttribute('content', imageUrl);
      }
    });
  }, [title, description, imageUrl]);
};
