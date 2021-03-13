import React from 'react';
import choices from "./icons/vendor";
import './App.css';
import Info from "./components/Info/Info";
import Popup from "./components/Popup/Popup";
import Choices from "./components/Choices/Choices";

const App = () => {
  const [wins, setWins] = React.useState(0);
  const [losses, setLosses] = React.useState(0);
  const [userChoice, setUserChoice] = React.useState(null);
  const [computerChoice, setComputerChoice] = React.useState(null);
  const [gameState, setGameState] = React.useState(null);

  React.useEffect(() => {
    restartGame();
  }, []);

  const handleUserChoice = (choice) => {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);

    if (chosenChoice.losesTo === computerChoice.id) {
      setGameState('lose');
      setLosses(losses => losses + 1);
    } else if (computerChoice.losesTo === chosenChoice.id) {
      setGameState('win');
      setWins(wins => wins + 1);
    } else if (chosenChoice.id === computerChoice.id) {
      setGameState('draw');
    }
  }

  const restartGame = () => {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  return (
    <div className="app">
      <Info wins={wins} losses={losses}/>
      {gameState &&
      <Popup gameState={gameState} restartGame={restartGame} computerChoice={computerChoice} userChoice={userChoice}/>}
      <Choices handleUserChoice={handleUserChoice} />
    </div>
  );
}
export default App;
