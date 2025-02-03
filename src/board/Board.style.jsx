import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 50px);
  justify-content: center;
  gap: 2px;
  background-color: darkgreen;
  padding: 5px;
  border-radius: 8px;
`;

export const BoardRow = styled.div`
  display: flex;
`;

export const Cell = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &.black::before,
  &.white::before {
    content: '';
    width: 80%;
    height: 80%;
    border-radius: 50%;
    position: absolute;
  }

  &.black::before {
    background-color: black;
  }

  &.white::before {
    background-color: white;
  }

  &:hover {
    background-color: darkolivegreen;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;