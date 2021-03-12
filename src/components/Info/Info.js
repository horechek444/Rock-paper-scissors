import React from 'react';
import './Info.css';

const Info = ({wins, losses}) => {
  return (
    <div className="info">
      <h2 className="info__title">Камень. Ножницы. Бумага</h2>
      <div className="info__wins-losses">
        <div className="info__wins">
          <span className="info__text">Всего выигрышей:&nbsp;</span>
          <span className="info__number">{wins}</span>
        </div>

        <div className="info__losses">
          <span className="info__text">Всего проигрышей:&nbsp;</span>
          <span className="info__number">{losses}</span>
        </div>
      </div>
    </div>
  );
};

export default Info;