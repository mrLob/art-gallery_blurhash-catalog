import React from 'react';
import { Layout } from '../../components';
import { useAbout } from '../../hooks/api/useAbout';
import { transformImageUri } from '../../utils/transformImageUri';
import { API_URL } from '../../utils/constants';

const About = () => {
  const about = useAbout();

  return (
    <Layout>
      {about && (
        <div className={'ck ck-content'}>
          {transformImageUri(about.content, (src) => API_URL + src)}
        </div>
      )}
    </Layout>
  );
};
export default About;
