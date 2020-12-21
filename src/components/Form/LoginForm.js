import * as React from "react";

import { FormCard, FormTextInput, StandaloneFormPage } from "tabler-react";
import withTouchedErrors from "../../util/withTouchedErrors.react";

import defaultStrings from "./LoginFormStrings";

/**
 * A login page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function LoginForm(props) {
  const {
    action,
    method,
    onSubmit,
    onChange,
    onBlur,
    values,
    strings = {},
    errors,
    message
  } = props;

  return (
    <StandaloneFormPage imageURL={"./images/local_news.svg"}>
      <FormCard
        buttonText={strings.buttonText || defaultStrings.buttonText}
        title={strings.title || defaultStrings.title}
        onSubmit={onSubmit}
        action={action}
        method={method}
      >
        <FormTextInput
          name="email"
          label={strings.emailLabel || defaultStrings.emailLabel}
          placeholder={
            strings.emailPlaceholder || defaultStrings.emailPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.email}
          error={errors && errors.email}
        />
        <FormTextInput
          name="password"
          type="password"
          label={strings.passwordLabel || defaultStrings.passwordLabel}
          placeholder={
            strings.passwordPlaceholder || defaultStrings.passwordPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.password}
          error={errors && errors.password}
        />
        {message && <span className="invalid-message">{message}</span>}
      </FormCard>

    </StandaloneFormPage>
  );
}

const LoginPageWithTouchedErrors = withTouchedErrors(
  ["email", "password"]
)(LoginForm);

export default LoginPageWithTouchedErrors;
