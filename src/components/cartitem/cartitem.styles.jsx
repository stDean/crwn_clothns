import styled from "styled-components";

export const Items = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 30%;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const NameText = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const PriceText = styled.span`
  font-size: 14px;
`;