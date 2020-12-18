// @flow

import * as React from "react";
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { Formik } from "formik";
import { LoginPage as TablerLoginPage } from "tabler-react";
import { postUserLogin } from '../../actions/AuthAction';

type Props = {};
export default class LoginPage extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const {dispatch, isFetching, authData } = this.props;
    const strings = isFetching ? {buttonText : "Please wait"}: {};
    
    if(authData && authData.success) {
      return <Redirect to="/" />
    }

    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(
          values,
          { setSubmitting, setErrors /* setValues and other goodies */ }
        ) => {
          if(!isFetching)
         dispatch(postUserLogin(values))
          // alert("Done!");
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          strings,
          isSubmitting,
        }) => (
            <TablerLoginPage
              onSubmit={handleSubmit}
              onChange={handleChange}
              onBlur={handleBlur}
              values={values}
              errors={errors}
              touched={touched}
            />
          )}
      />
    );
  }
}