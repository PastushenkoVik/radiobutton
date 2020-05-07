import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './ColorRadioButtons.scss';
import ColorRadioButton from '../ColorRadioButton/ColorRadioButton';

const ColorRadioButtons = ({ changeRadioButtonHandle, radioItems }) => {
  const [borderColor, changeBorderColor] = useState('');

  useEffect(() => {
    document.title = borderColor === ''
      ? '-'
      : String(borderColor.split('-').slice(-1)).toUpperCase();
  });

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

ColorRadioButtons.propTypes = {
  changeRadioButtonHandle: PropTypes.func.isRequired,
  radioItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isSelect: PropTypes.bool.isRequired,
  })).isRequired,
};

export default ColorRadioButtons;
