import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .custom-button {
    width: 85%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 95%;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const NameText = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceText = styled.span`
  width: 10%;
`;