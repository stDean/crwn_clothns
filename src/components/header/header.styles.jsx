import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, .4);
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center; 
  justify-content: flex-end;
`;

export const OptionsLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;