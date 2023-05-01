import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  .collection-item {
    width: 22vw;
  }
`

export const HeadText = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  & .collection-item {
    margin-bottom: 30px;
  }
`;