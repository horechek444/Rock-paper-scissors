import React, {useEffect} from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';

const choices = [
  {id: 1, name: "камень", components: Rock},
  {id: 2, name: "ножницы", components: Paper},
  {id: 3, name: "бумага", components: Scissors},
];

const App = () => {
  const [wins, setWins] = React.useState(0);
  const [losses, setLosses] = React.useState(0);
  const [userChoice, setUserChoice] = React.useState(null);
  const [computerChoice, setComputerChoice] = React.useState(null);
  const [gameState, setGameState] = React.useState(null);

  useEffect(() => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }, []);

  const handleUserChoice = (choice) => {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);

    gameState('win');
  }

  const renderComponent = (choise) => {
    const Component = choise.component;
    return <Component />
  }

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Камень. Ножницы. Бумага</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="text">Всего выигрышей:&nbsp;</span>
            <span className="number">{wins}</span>
          </div>

          <div className="losses">
            <span className="text">Всего проигрышей:&nbsp;</span>
            <span className="number">{losses}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {gameState && (<div className="game-state">
         <div>
           <div className={`game-state-content ${gameState}`}>
             <p>{renderComponent(userChoice)}</p>
             <p>Ты выиграл!</p>
             <p>{renderComponent(computerChoice)}</p>
           </div>
         </div>
       </div>
      )}

      <div className="choices">
        {/* choices captions */}
        <div>Ты</div>
        <div />
        <div>Компьютер</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">против</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
export default App;
