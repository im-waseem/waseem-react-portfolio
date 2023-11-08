import React, { useState } from 'react';
import './Game.css';

const Game = () => {
  const [userName, setUserName] = useState(''); // Initialize user name state
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setTieScore(tieScore + 1);
      return "It's a tie!";
    }
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setUserScore(userScore + 1);
      return "You win!";
    } else {
      setComputerScore(computerScore + 1);
      return "Computer wins!";
    }
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const playGame = (choice) => {
    if (!gameOver) {
      const computerChoice = generateComputerChoice();
      const gameResult = determineWinner(choice, computerChoice);

      setPlayerChoice(choice);
      setComputerChoice(computerChoice);
      setResult(gameResult);

      if (userScore >= 5 || computerScore >= 5) {
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setUserName('');
    setUserScore(0);
    setComputerScore(0);
    setTieScore(0);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
      <div>
        {userName ? (
          <p>{userName}'s Score: {userScore}</p>
        ) : (
          <div className="name-input">
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={handleNameChange}
            />
            <button onClick={() => setUserName(userName || 'User')}>Start</button>
          </div>
        )}
        <p>Computer's Score: {computerScore}</p>
        <p>Ties: {tieScore}</p>
      </div>
      {userName && (
        <div className="choices">
          {choices.map((choice) => (
            <button key={choice} onClick={() => playGame(choice)} className="player-choice">
              {choice}
            </button>
          ))}
        </div>
      )}
      {playerChoice && (
        <div className={`result${gameOver ? ' final-result' : ''}`}>
          <p>You chose: <span className="player-choice">{playerChoice}</span></p>
          <p>Computer chose: <span className="computer-choice">{computerChoice}</span></p>
          <p>{result}</p>
          {gameOver ? (
            <div>
              <p>Final Score:</p>
              <p>{userName}: {userScore}</p>
              <p>Computer: {computerScore}</p>
              <button onClick={resetGame} className="restart-button">Play Again</button>
            </div>
          ) : (
            <button onClick={resetGame} className="restart-button">Play Again</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
