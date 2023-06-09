import styled from "styled-components";

export const CheckOutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const SpanText = styled.span``;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  font-weight: 500;
`;

export const TotalText = styled.span``;

export const EmptyText = styled.span`
  margin-top: 40px;
  font-size: 32px;

  a {
    font-weight: 900;

    &:hover {
      border-bottom: 2px solid black;
    }
  }
`;

export const PayButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  outline: none;

  &:active {
    transform: scale(.98);
  }
`;