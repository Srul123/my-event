import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { useTranslation } from "react-i18next";
import ContactsIcon from '@material-ui/icons/Contacts';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AppsIcon from '@material-ui/icons/Apps';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});
function ProductValues(props) {
  const { t } = useTranslation();

  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/*<img*/}
        {/*  // src="/static/themes/onepirate/productCurvyLines.png"*/}
        {/*  src={"../../../../assets/styles/productHeroWonder.png"}*/}
        {/*  className={classes.curvyLines}*/}
        {/*  alt="curvy lines"*/}
        {/*/>*/}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ContactsIcon  style={{ fontSize: 80 }} />
              {/*<img*/}
              {/*  className={classes.image}*/}
              {/*  src={"../../../../assets/styles/productHeroWonder.png"}*/}
              {/*  alt="suitcase"*/}
              {/*/>*/}
              <Typography variant="h6" className={classes.title}>
                {t("home.products.boxOne")}
              </Typography>
              <Typography variant="h5">
                {t("home.products.boxOneContent")}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={`${classes.item} `}>
              <AppsIcon style={{ fontSize: 80 }}  />

              {/*<img*/}
              {/*  className={classes.image}*/}
              {/*  //  src="/static/themes/onepirate/productValues2.svg"*/}
              {/*  alt="graph"*/}
              {/*/>*/}
              <Typography variant="h6" className={classes.title}>
                {t("home.products.boxTwo")}
              </Typography>
              <Typography variant="h5">
                {t("home.products.boxTwoContent")}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={`${classes.item} `}>
              <MonetizationOnIcon  style={{ fontSize: 80 }}/>
              {/*<img*/}
              {/*  className={classes.image}*/}
              {/*  //   src="/static/themes/onepirate/productValues3.svg"*/}
              {/*  alt="clock"*/}
              {/*/>*/}
              <Typography variant="h6" className={classes.title}>
                {t("home.products.boxThree")}
              </Typography>
              <Typography variant="h5">
                {t("home.products.boxThreeContent")}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
