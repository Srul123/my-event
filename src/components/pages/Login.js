import React, { useState, useEffect } from "react";
import { setAlert } from "../../redux/actions/alertActions";
import { clearErrors } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const Login = ({ props, auth, login, setAlert }) => {
  const history = useHistory();

  const { error, isAuthenticated } = auth;

   const [user, setUser] = useState({
     email: "",
     password: ""
   });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login, setAlert })(Login);
