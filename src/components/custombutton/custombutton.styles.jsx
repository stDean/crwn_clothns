import styled from "styled-components";

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  font-size: 13px;
  background-color: ${({ inverted, isGoogleButton }) => inverted ? "white" : isGoogleButton ? "#4285f4" : "black"};
  color: ${({ inverted, isGoogleButton }) => inverted ? "#000" : isGoogleButton ? "#fff" : "#fff"};
  text-transform: uppercase;
  font-weight: bolder;
  border: ${({ inverted }) => inverted ? "1px solid black" : "none"};
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${({ inverted, isGoogleButton }) => inverted ? "#000" : isGoogleButton ? "#357ae8" : "#fff"};;
    color: ${({ inverted, isGoogleButton }) => inverted ? "#fff" : isGoogleButton ? "#fff" : "#000"};
    border: ${({ inverted, isGoogleButton }) => inverted ? "none" : isGoogleButton ? "none" : "1px solid black"};
  }

  @media screen and (max-width: 1150px) {
    font-size: 10px;
  }
`;