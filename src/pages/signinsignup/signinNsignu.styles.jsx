import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 1150px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 750px;
  }
`;