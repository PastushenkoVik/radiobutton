import React from 'react';

import './ColorRadioButton.scss';

const ColorRadioButton = ({
  id,
  isSelect,
  name,
  radioButtonHandler,
}) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <label
    htmlFor={name}
    className="color-radio-button"
    onClick={() => radioButtonHandler(id, name)}
    onKeyPress={() => {}}
  >
    <span className={`color-radio-${name}`}>{name}</span>
    {isSelect
      ? <input id={name} type="radio" name="color" checked />
      : <input id={name} type="radio" name="color" />}
  </label>
);

export default ColorRadioButton;
