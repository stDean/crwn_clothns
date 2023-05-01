import styled from "styled-components";

export const DropDown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 5px;

  button {
    margin-top: auto;
  }
`;

export const Items = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyText = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;