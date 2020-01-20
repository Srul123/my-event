import withRoot from "../material-ui-modules/withRoot";
// --- Post bootstrap -----
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from "react-final-form";
import Typography from "../material-ui-modules/components/Typography";
import AppAppBar from "../material-ui-modules/views/AppAppBar";
import AppForm from "../material-ui-modules/views/AppForm";
import {email as validateEmail, required } from "../material-ui-modules/form/validation";
import RFTextField from "../material-ui-modules/form/RFTextField";
import FormButton from "../material-ui-modules/form/FormButton";
import FormFeedback from "../material-ui-modules/form/FormFeedback";

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6)
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  feedback: {
    marginTop: theme.spacing(2)
  }
}));

const SignUp = ({props, auth }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const [sent, setSent] = useState(false);
  const { register, error, isAuthenticated } = auth;
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const validate = values => {
    const errors = required(
      [
        `${t("sign-up.firstName")}`,
        `${t("sign-up.lastName")}`,
        `${t("sign-up.email")}`,
        `${t("sign-up.password")}`
      ],
      values
    );

    useEffect(() => {
      if (isAuthenticated) {
        props.history.push("/");
      }

      if (error === "User already exists") {
        // setAlert(error, "danger");
        // clearErrors();
      }
      // eslint-disable-next-line
    }, []);

    if (!errors.validateEmail) {
      const emailError = validateEmail(values.email, values);
      if (emailError) {
        errors.email = validateEmail(values.email, values);
      }
    }
    return errors;
  };

  const { name, email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleClick = () => {
    history.push("/sign-up");
  };

  const handleSubmit = e => {
    e.preventDefault();

    register({
      name,
      email,
      password
    });

    setSent(true);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            {t("sign-up.title")}
          </Typography>
          <Typography variant="body2" align="center">
            <Link to={"/sign-in"} underline="always">
              {t("sign-up.alreadyHave")}
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="fname"
                    fullWidth
                    label={`${t("sign-up.firstName")}`}
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    autoComplete="lname"
                    fullWidth
                    label={`${t("sign-up.lastName")}`}
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label={`${t("sign-up.email")}`}
                margin="normal"
                name="email"
                required
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label={`${t("sign-up.password")}`}
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent
                  ? t("sign-up.progress")
                  : t("sign-up.title")}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRoot(SignUp));
