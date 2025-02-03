import React, { useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { StyledBoard, StyledButton, Cell, BoardRow } from './Board.style';

const BOARD_SIZE = 8;

// Function to initialize the board
const initializeBoard = () => {
  const board = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));

  // Initial setup for Reversi
  board[3][3] = 'W';
  board[3][4] = 'B';
  board[4][3] = 'B';
  board[4][4] = 'W';

  return board;
};

const Board = () => {
  const [board, setBoard] = useState(initializeBoard);
  const [currentPlayer, setCurrentPlayer] = useState('B');

  const handleCellClick = (row, col) => {
    if (board[row][col] !== null) return; // Ignore occupied cells

    // Copy the board state
    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = currentPlayer;

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'B' ? 'W' : 'B'); // Toggle player
  };

  const resetGame = () => {
    setBoard(initializeBoard());
    setCurrentPlayer('B');
  };

  return (
    <Container textAlign="center">
      <Segment>
        <h2>Reversi - {currentPlayer === 'B' ? 'Black' : 'White'}'s Turn</h2>
        <StyledBoard>
          {board.map((row, rowIndex) => (
            <BoardRow key={rowIndex}>
              {row.map((cell, colIndex) => (
                <Cell
                  key={colIndex}
                  className={cell ? (cell === 'B' ? 'black' : 'white') : ''}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                />
              ))}
            </BoardRow>
          ))}
        </StyledBoard>
        <StyledButton primary onClick={resetGame}>
          Restart Game
        </StyledButton>
      </Segment>
    </Container>
  );
};

export default Board;
