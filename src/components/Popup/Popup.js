import React from 'react';
import './Popup.css';

const Popup = ({gameState, restartGame, userChoice, computerChoice}) => {
  const renderComponent = (choice) => {
    const Component = choice.component;
    return <Component />
  }

  const handleResult = (gameState) => {
    if (gameState === 'win') {
      return 'выиграл, поздравляю';
    } else if (gameState === 'lose') {
      return 'проиграл, сожалею';
    } else if (gameState === 'draw') {
      return 'сыграл вничью';
    }
  }

  return (
      <div className={`game-state ${gameState}`} onClick={() => restartGame()}>
        <div className="game-state__container">
          <div className="game-state__content">
            <p className="game-state__part">{renderComponent(userChoice)}</p>
            <p className="game-state__part">Ты {handleResult(gameState)}!</p>
            <p className="game-state__part">{renderComponent(computerChoice)}</p>
          </div>
          <button className="game-state__button" onClick={() => restartGame()}>Сыграть ещё раз</button>
        </div>
      </div>
    )
};

export default Popup;