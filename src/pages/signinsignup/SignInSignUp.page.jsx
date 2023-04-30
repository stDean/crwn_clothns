import { SignIn, SignUp } from "../../components";
import { AuthContainer } from "./signinNsignu.styles";

const SignInSignUp = () => {
  return (
    <AuthContainer>
      <SignIn />
      <SignUp />
    </AuthContainer>
  )
}

export default SignInSignUp