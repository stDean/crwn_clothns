import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../carticon/CartIcon.component";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionsLink to="/shop">SHOP</OptionsLink>
        <OptionsLink to="/signin">SIGN IN</OptionsLink>
        <CartIcon />
      </OptionsContainer>
    </HeaderContainer>
  )
}

export default Header