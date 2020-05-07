import React, { useState } from 'react';
import shortid from 'shortid';

import './ColorRadioButtons.scss';
import ColorRadioButton from '../ColorRadioButton/ColorRadioButton';

const ColorRadioButtons = ({ changeRadioButtonHandle, radioItems }) => {
  const [borderColor, changeBorderColor] = useState('');

  const setBorderColor = (id, colorName) => {
    changeBorderColor(`color-radiobutton-border-${colorName}`);
    changeRadioButtonHandle(id);
  };

  return (
    <form className={`color-radiobutton ${borderColor}`}>
      <div className="color-wrapper">
        {radioItems.map((radioItem) => (
          <ColorRadioButton
            key={shortid.generate()}
            radioButtonHandler={setBorderColor}
            {...radioItem}
          />
        ))}
      </div>
    </form>
  );
};

export default ColorRadioButtons;
