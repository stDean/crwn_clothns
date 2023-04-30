import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../carticon/CartIcon.component";
import { auth } from "../../services/firebase";

const Header = () => {

  const user = useSelector(({ user }) => user.currentUser)
  console.log(user);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionsLink to="/shop">SHOP</OptionsLink>
        {
          user ? (

            <OptionsLink as="div" onClick={() => signOut(auth)}>SIGN OUT</OptionsLink>
          ) : (
            <OptionsLink to="/signin">SIGN IN</OptionsLink>
          )
        }
        <CartIcon />
      </OptionsContainer>
    </HeaderContainer>
  )
}

export default Header