import React, { useState } from 'react';
import shortid from 'shortid';

import './ColorRadioButtons.scss';
import ColorRadioButton from '../ColorRadioButton/ColorRadioButton';

const ColorRadioButtons = ({ buttonSelectedHandler, radioItems }) => {
    const [borderColor, changeBorderColor] = useState('');

    function setBorderColor(colorName) {
        changeBorderColor(`color-radiobutton-border-${colorName}`);
    };

    return (
        <form className={`color-radiobutton ${borderColor}`}>
            <div className="color-wrapper">
                {radioItems.map((radioItem) => (<ColorRadioButton 
                    key={shortid.generate()} 
                    radioButtonHandler={setBorderColor} 
                    buttonSelectedHandler={buttonSelectedHandler}
                    {...radioItem} />))}            
            </div>
        </form>
    );
};

export default ColorRadioButtons;
