import React, { useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { StyledBoard, StyledButton, Cell, BoardRow, BoardContainer } from './Board.style';
import DefaultApi from '../api/DefaultApi.js'; // or GameApi, depending on your generator output
import _ from 'lodash';


const BOARD_SIZE = 8;

// Function to initialize the board
const initializeBoard = () => {
  const board = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill('E'));

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
  const [nextMoves, setNextMoves] = useState(new Map());

  // Create an instance of the API.
  const apiInstance = new DefaultApi();

  const handleCellClick = (row, col) => {
    if (board[row][col] !== 'E') return; // Ignore occupied cells

    const key = nextMoves.keys().find(key => key.row === row && key.col === col);
    if (key == null) return;

    const nextBoard = nextMoves.get(key);
    setBoard(nextBoard);
    setLastMove({ row, col }); // Store the last move's position
    setCurrentPlayer(currentPlayer === 'B' ? 'W' : 'B'); // Toggle player

    const gameRequest = {
      board: nextBoard,
      opponent: "WHITE"
    };

    // Call the API method for making the opponent's move.
    // The generated API client method may return a Promise.
    apiInstance.makeOpponentMove(gameRequest, (error, data, response) => {
      const map = new Map();
      response.body.nextMoves.forEach(n => map.set(n.move, n.boardInfo.board))
      setNextMoves(map)
      setBoard(response.body.boardInfo.board)
    })
  };

  const resetGame = () => {
    const board = initializeBoard();
    setBoard(board);
    setCurrentPlayer('B');
    setLastMove(null);

    const map = new Map();
    const board1 = _.cloneDeep(board);
    board1[2][3] = 'B';
    board1[3][3] = 'B';
    map.set({row: 2, col: 3}, board1)
    setNextMoves(map);
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
                  const isValidMove = nextMoves.keys().some((m) => m.row === rowIndex && m.col === colIndex);

                  return (
                    <Cell
                      key={colIndex}
                      $isLastMove={isLastMove}
                      $isValidMove={isValidMove}
                      className={cell !== 'E' ? (cell === 'B' ? 'black' : 'white') : ''}
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
