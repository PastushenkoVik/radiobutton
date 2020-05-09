import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import ColorRadioButtons from './components/ColorRadioButtons/ColorRadioButtons';

const colorItems = [
  {
    id: 0,
    isSelect: false,
    name: 'blue',
  },
  {
    id: 1,
    isSelect: false,
    name: 'red',
  },
  {
    id: 2,
    isSelect: false,
    name: 'green',
  },
];

function App() {
  const [colorRadioItems, setColorRadioItems] = useState(colorItems);

  const changeRadioButtonHandle = (id) => (
    setColorRadioItems(colorItems.map((item) => ({ ...item, isSelect: (item.id === id) })))
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ColorRadioButtons
          changeRadioButtonHandle={changeRadioButtonHandle}
          radioItems={colorRadioItems}
        />
      </header>
    </div>
  );
}

export default App;
