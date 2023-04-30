import { useState } from "react";

import FormInput from "../formInput/FormInput.component"
import { SignInContainer, TitleText, SignInForm, SubTitle } from "./signup.styles"
import CustomButton from "../custombutton/CustomButton.component";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCFPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <SignInContainer>
      <TitleText>I do not have an account</TitleText>
      <SubTitle>Create a one now.</SubTitle>

      <SignInForm>
        <FormInput
          handleChange={({ target }) => setDisplayName(target.value)}
          type='text'
          name='displayName'
          value={displayName}
          required
          label='Email'
        />

        <FormInput
          handleChange={({ target }) => setEmail(target.value)}
          type='email'
          name='email'
          value={email}
          required
          label='Email'
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          required
          label='Password'
          handleChange={({ target }) => setPassword(target.value)}
        />

        <FormInput
          type='password'
          name='password'
          value={cfPassword}
          required
          label='Password'
          handleChange={({ target }) => setCFPassword(target.value)}
        />

        <CustomButton
          type="submit"
        >
          Sign Up
        </CustomButton>
      </SignInForm>
    </SignInContainer>
  )
}

export default SignUp