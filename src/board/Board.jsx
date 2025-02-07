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

function initializeNextMoves() {
  const map = new Map();
  const board1 = _.cloneDeep(initializeBoard());
  board1[2][3] = 'B';
  board1[3][3] = 'B';
  map.set({ row: 2, col: 3 }, { board: board1, score: { black: 4, white: 1 }, finished: false });
  const board2 = _.cloneDeep(initializeBoard());
  board2[3][2] = 'B';
  board2[3][3] = 'B';
  map.set({ row: 3, col: 2 }, { board: board2, score: { black: 4, white: 1 }, finished: false });
  const board3 = _.cloneDeep(initializeBoard());
  board3[4][5] = 'B';
  board3[4][4] = 'B';
  map.set({ row: 4, col: 5 }, { board: board3, score: { black: 4, white: 1 }, finished: false });
  const board4 = _.cloneDeep(initializeBoard());
  board4[5][4] = 'B';
  board4[4][4] = 'B';
  map.set({ row: 5, col: 4 }, { board: board4, score: { black: 4, white: 1 }, finished: false });
  return map;
}

export const Board = () => {
  const [board, setBoard] = useState(initializeBoard);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState({ black: 2, white: 2 });
  const [currentPlayer, setCurrentPlayer] = useState('B');
  const [lastMove, setLastMove] = useState(null);
  const [nextMoves, setNextMoves] = useState(initializeNextMoves);

  // Create an instance of the API.
  const apiInstance = new DefaultApi();

  function makeOpponentMove(gameRequest) {
    // Call the API method for making the opponent's move.
    // The generated API client method may return a Promise.
    apiInstance.makeOpponentMove(gameRequest, (error, data, response) => {
      const map = new Map()
      setFinished(response.body.boardInfo.finished);
      setBoard(response.body.boardInfo.board);
      setScore(response.body.boardInfo.score);

      if (!response.body.boardInfo.finished) {
        response.body.nextMoves.forEach(n => map.set(n.move, n.boardInfo));
        setNextMoves(map);

        if (map.keys().next().value.row == null) {
          const anotherGameRequest = {
            board: response.body.boardInfo.board,
            opponent: 'WHITE',
          };
          makeOpponentMove(anotherGameRequest);
        }
      }
    });
  }

  const handleCellClick = (row, col) => {
    if (board[row][col] !== 'E') return; // Ignore occupied cells

    const key = nextMoves.keys().find(key => key.row === row && key.col === col);
    if (key == null) return;

    const nextBoardInfo = nextMoves.get(key);
    setBoard(nextBoardInfo.board);
    setScore(nextBoardInfo.score);
    setFinished(nextBoardInfo.finished);
    setLastMove({ row, col }); // Store the last move's position
    setCurrentPlayer(currentPlayer === 'B' ? 'W' : 'B'); // Toggle player
    setNextMoves(new Map())

    if (!nextBoardInfo.finished) {
      const gameRequest = {
        board: nextBoardInfo.board,
        opponent: 'WHITE',
      };
      makeOpponentMove(gameRequest);
    }
  };

  const resetGame = () => {
    const board = initializeBoard();
    setBoard(board);
    setCurrentPlayer('B');
    setLastMove(null);
    setFinished(false);
    setScore({ black: 2, white: 2 });
    setNextMoves(initializeNextMoves());
  };

  return (
    <Container textAlign="center">
      <Segment>
        <h2>Reversi - {currentPlayer === 'B' ? 'Black' : 'White'}'s Turn</h2>
        <div style={{ marginBottom: '10px' }}>
          <strong>Score:</strong> Black {score.black} - White {score.white}
        </div>
        {finished && <div style={{ color: 'red', marginBottom: '10px' }}><strong>Game Finished!</strong></div>}
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
