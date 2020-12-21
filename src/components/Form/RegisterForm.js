import * as React from "react";

import {
  FormCard,
  FormTextInput,
  FormCheckboxInput,
  StandaloneFormPage
} from "tabler-react";
import withTouchedErrors from "../../util/withTouchedErrors.react";

import defaultStrings from "./RegisterFormStrings";
// import type { stringTypes } from "./RegisterPage.strings";

import { FormEvents, FocusEvents } from "tabler-react";


/**
 * A register page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function RegisterForm(props) {
  const {
    action,
    method,
    onSubmit,
    onChange,
    onBlur,
    values,
    strings = {},
    errors,
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
          name="name"
          label={strings.nameLabel || defaultStrings.nameLabel}
          placeholder={
            strings.namePlaceholder || defaultStrings.namePlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.name}
          error={errors && errors.name}
        />
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
          name="username"
          label={strings.usernamePlaceholder || defaultStrings.usernameLabel}
          placeholder={
            strings.usernamePlaceholder || defaultStrings.usernamePlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.username}
          error={errors && errors.username}
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
        <FormCheckboxInput
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.terms}
          name="terms"
          label={strings.termsLabel || defaultStrings.termsLabel}
        />
      </FormCard>
    </StandaloneFormPage>
  );
}

const RegisterPageWithTouchedErrors = withTouchedErrors(
  ["name", "email", "email", "password", "terms"]
)(RegisterForm);

export default RegisterPageWithTouchedErrors;