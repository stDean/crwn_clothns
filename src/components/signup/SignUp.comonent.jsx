import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import FormInput from "../formInput/FormInput.component";
import { SignInContainer, TitleText, SignInForm, SubTitle } from "./signup.styles";
import CustomButton from "../custombutton/CustomButton.component";
import { auth, createUserProfile } from "../../services/firebase";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCFPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== cfPassword) {
      alert("Password don't match!!")
      return;
    }

    try {
      // get the user info on sign up
      const { user } = await createUserWithEmailAndPassword(auth, email, password)

      // save the user into the db and add the displayName as the otherProps passes
      createUserProfile(user, { displayName });

      // on submit reset all form input to an empty string
      setCFPassword("");
      setDisplayName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert('error creating user', error.message)
    }

  }

  return (
    <SignInContainer>
      <TitleText>I do not have an account</TitleText>
      <SubTitle>Create a one now.</SubTitle>

      <SignInForm onSubmit={handleSubmit}>
        <FormInput
          handleChange={({ target }) => setDisplayName(target.value)}
          type='text'
          name='displayName'
          value={displayName}
          required
          label='Display Name'
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
          label='Confirm Password'
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