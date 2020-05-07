import React from 'react';
import PropTypes from 'prop-types';

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

ColorRadioButton.propTypes = {
  id: PropTypes.number.isRequired,
  isSelect: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  radioButtonHandler: PropTypes.func.isRequired,
};

export default ColorRadioButton;
