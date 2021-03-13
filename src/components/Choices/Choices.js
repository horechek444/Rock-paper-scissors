import React from 'react';
import choices from "../../icons/vendor";
import ChoiceButton from "../ChoiceButton/ChoiceButton";
import './Choices.css';

const Choices = ({handleUserChoice}) => {
  return (
    <div className="choices">
      <div className="choices__title">
        <span className="choices__user">Ты</span>
        <span className="choices__computer">Компьютер</span>
      </div>

      <div className="choices__body">
        <div className="choices__column">
          {choices.map(choice => <ChoiceButton name={choice.name} handleUserChoice={handleUserChoice} id={choice.id}
                                               key={choice.id}>
            <choice.component/>
          </ChoiceButton>)}
        </div>

        <span className="choices__vs choices__column">против</span>

        <div className="choices__column">
          <button className="computer-choice choices__button">?</button>
        </div>
      </div>
    </div>
  );
};

export default Choices;