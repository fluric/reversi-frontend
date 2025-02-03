import React, { useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { StyledBoard, StyledButton, Cell, BoardRow, BoardContainer } from './Board.style';

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

export const Board = () => {
  const [board, setBoard] = useState(initializeBoard);
  const [currentPlayer, setCurrentPlayer] = useState('B');
  const [lastMove, setLastMove] = useState(null);
  const [validMoves, setValidMoves] = useState([]);

  const handleCellClick = (row, col) => {
    if (board[row][col] !== null) return; // Ignore occupied cells

    setLastMove({ row, col }); // Store the last move's position

    // Copy the board state
    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = currentPlayer;

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'B' ? 'W' : 'B'); // Toggle player
  };

  const resetGame = () => {
    setBoard(initializeBoard());
    setCurrentPlayer('B');
    setLastMove(null);
    setValidMoves([{row: 0, col: 0}]);
  };

  return (
    <Container textAlign="center">
      <Segment>
        <h2>Reversi - {currentPlayer === 'B' ? 'Black' : 'White'}'s Turn</h2>
        <BoardContainer>
          <StyledBoard>
            {board.map((row, rowIndex) => (
              <BoardRow key={rowIndex}>
                {row.map((cell, colIndex) => {
                  const isLastMove = lastMove?.row === rowIndex && lastMove?.col === colIndex;
                  const isValidMove = validMoves.some((m) => m.row === rowIndex && m.col === colIndex);

                  return (
                    <Cell
                      key={colIndex}
                      isLastMove={isLastMove}
                      isValidMove={isValidMove}
                      className={cell ? (cell === 'B' ? 'black' : 'white') : ''}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                    />);
                })}
              </BoardRow>
            ))}
          </StyledBoard>
        </BoardContainer>
        <StyledButton primary onClick={resetGame}>
          Restart Game
        </StyledButton>
      </Segment>
    </Container>
  );
};

export default Board;
