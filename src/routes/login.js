import React from "react";
import {withRouter} from "react-router-dom";
import styled from "styled-components";
import {Formik} from "formik";
import * as Yup from "yup";
import FormField from "../components/form/FormField";
import Input from "../components/form/Input";
import {LoginForm} from "../components/form/Form";
// Graphql setup
import auth from "../auth/Auth";
// Styles impoty
import {MiniCardStyles} from "../components/cards";
import {ButtonStyleLogin} from "../components/buttons";
import "@progress/kendo-theme-material/dist/all.css";
import setvibg from "../images/setvibg.png";
import setvilogo from "../images/setvilogo.jpg";

const LoginContainer = styled.div`
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  span {
    font-size: 12px;
  }
  .error-message {
    color: red;
    margin-left: 0.5em;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.blue};
  }
`;

class Login extends React.Component {
  render() {
    return (
      <LoginContainer style={{backgroundImage: `url(${setvibg})`}}>
        <MiniCardStyles style={{width: "40vw"}}>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={values => {
              const {email, password} = values;
              auth.login(email, password);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Please enter your email"),
              password: Yup.string().required("No password provided.")
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
                setFieldValue
              } = props;
              return (
                <LoginForm onSubmit={handleSubmit}>
                  <img src={setvilogo} />
                  <span>Sign in to your account</span>
                  <FormField labelName="email">
                    <Input
                      id="Email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      className={
                        props.errors.email && props.touched.email
                          ? "error-input"
                          : "text-input"
                      }
                    />
                    {touched.email && errors.email ? (
                      <span>{errors.email}</span>
                    ) : (
                      ""
                    )}
                  </FormField>
                  <FormField labelName="Password">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      className={
                        props.errors.password && props.touched.password
                          ? "error-input"
                          : "text-input"
                      }
                    />
                    {touched.password && errors.password ? (
                      <span>{errors.password}</span>
                    ) : (
                      ""
                    )}
                  </FormField>
                  <div className="secondaryButtons">
                    <label className="k-form-field">
                      <input
                        type="checkbox"
                        id="rememberme"
                        className="k-checkbox"
                      />
                      <label className="k-checkbox-label" for="rememberme" />
                      Remember Me
                    </label>
                    <a href="/forgotpassword">Forgot Password?</a>
                  </div>
                  <ButtonStyleLogin type="submit">Sign In</ButtonStyleLogin>
                </LoginForm>
              );
            }}
          </Formik>
        </MiniCardStyles>
      </LoginContainer>
    );
  }
}

function mapStateToProps(state) {
  return {authenticated: state.auth.authenticated};
}

export default withRouter(Login);
