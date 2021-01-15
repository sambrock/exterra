import { Helmet } from 'react-helmet';

import { site } from '../config';

const Head = ({ title }) => {
  return (
    <Helmet title={title} defaultTitle={site.defaultTitle} titleTemplate={`%s - ${site.defaultTitle}`} />
  );
};

export default Head;