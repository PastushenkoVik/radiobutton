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
  }, [borderColor]);

  const setBorderColor = (id, colorName) => {
    changeBorderColor(`color-radiobutton-border-${colorName}`);
    changeRadioButtonHandle(id);
  };

  const colorRadioButton = (radioItem) => (
    <ColorRadioButton
      key={shortid.generate()}
      radioButtonHandler={setBorderColor}
      {...radioItem}
    />
  );

  return (
    <form className={`color-radiobutton ${borderColor}`}>
      <div className="color-wrapper">
        {radioItems.map(colorRadioButton)}
      </div>
    </form>
  );
};

ColorRadioButtons.propTypes = {
  changeRadioButtonHandle: PropTypes.func.isRequired,
  radioItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isSelect: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ColorRadioButtons;
