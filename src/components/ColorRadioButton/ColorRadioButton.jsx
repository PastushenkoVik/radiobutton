import React from 'react';

import './ColorRadioButton.scss';

const ColorRadioButton = ({
    id, 
    isSelect, 
    name, 
    radioButtonHandler, 
}) => {

    return (
        <label
            htmlFor={name} 
            className="color-radio-button"
            onClick={() => radioButtonHandler(id, name)}>
            <span className={`color-radio-${name}`}>{name}</span>
            {isSelect
                ? <input id={name} type="radio" name="color" checked/>
                : <input id={name} type="radio" name="color"/>
            }
        </label>
    );
};

export default ColorRadioButton;