import React from 'react';
import './ChoiceButton.css';

const ChoiceButton = ({handleUserChoice, children, name, id}) => {
  return (
    <button className={`choices__${name} choices__button`} onClick={() => handleUserChoice(id)}>
      {children}
    </button>
  );
};

export default ChoiceButton;