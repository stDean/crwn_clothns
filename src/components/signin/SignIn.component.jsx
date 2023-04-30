import { useState } from "react";

import FormInput from "../formInput/FormInput.component"
import { SignInContainer, TitleText, SignInForm, SubTitle, Buttons } from "./signin.styles"
import CustomButton from "../custombutton/CustomButton.component";
import { signInWithGoogle, auth } from "../../services/firebase";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SignInContainer>
      <TitleText>I already have an account</TitleText>
      <SubTitle>Sign in with your email and password.</SubTitle>

      <SignInForm>
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

        <Buttons>
          <CustomButton
            type="submit"
          >
            Sign In
          </CustomButton>
          <CustomButton
            type="submit"
            isGoogleButton
            onClick={signInWithGoogle}
          >
            Sign in with google
          </CustomButton>
        </Buttons>
      </SignInForm>
    </SignInContainer>
  )
}

export default SignIn