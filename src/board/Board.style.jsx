import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledBoard = styled.div`
    display: grid;
    border: 1px solid;
    grid-template-rows: repeat(8, 50px);
    justify-content: center;
    width: 402px;
`;

export const BoardContainer = styled.div`
    display: flex;
    justify-content: center;
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
    background-color: ${({ isLastMove }) => (isLastMove ? 'darkgreen' : 'green')};
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

    /* Highlight valid moves with a subtle circular indicator */
    ${({ isValidMove }) =>
            isValidMove &&
            `
    &:after {
      content: '';
      width: 30%;
      height: 30%;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.5);
      position: absolute;
    }
  `}

    &:hover {
        background-color: darkolivegreen;
    }
`;

export const StyledButton = styled(Button)`
    margin-top: 10px;
`;