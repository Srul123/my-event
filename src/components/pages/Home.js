import withRoot from '../material-ui-modules/withRoot';
// --- Post bootstrap -----
import React, { useEffect } from "react";
import { loadUser,logout} from "../../redux/actions/authActions";
import { connect } from "react-redux";

// import ProductCategories from './material-ui-modules/views/ProductCategories';
// import ProductSmokingHero from './material-ui-modules/views/ProductSmokingHero';
// import AppFooter from './material-ui-modules/views/AppFooter';
import ProductHero from '../material-ui-modules/views/ProductHero';
import ProductValues from '../material-ui-modules/views/ProductValues';

// import ProductHowItWorks from './material-ui-modules/views/ProductHowItWorks';
// import ProductCTA from './material-ui-modules/views/ProductCTA';
// import AppAppBar from './material-ui-modules/views/AppAppBar';

function Index({loadUser,logout }) {
  useEffect(()=>{
   loadUser();
    //eslint-disable-next-line
  }, []);
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

export default connect(null, { loadUser,logout })(
  withRoot(Index)
);