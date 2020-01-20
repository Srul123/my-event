import withRoot from '../material-ui-modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
// import ProductCategories from './material-ui-modules/views/ProductCategories';
// import ProductSmokingHero from './material-ui-modules/views/ProductSmokingHero';
// import AppFooter from './material-ui-modules/views/AppFooter';
import ProductHero from '../material-ui-modules/views/ProductHero';
import ProductValues from '../material-ui-modules/views/ProductValues';
// import ProductHowItWorks from './material-ui-modules/views/ProductHowItWorks';
// import ProductCTA from './material-ui-modules/views/ProductCTA';
// import AppAppBar from './material-ui-modules/views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      {/* <ProductCategories /> */}
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(Index);
