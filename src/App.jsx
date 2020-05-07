import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import ColorRadioButtons from './components/ColorRadioButtons/ColorRadioButtons';

const colorItems = [
  {
    id: 0,
    name: 'blue',
    isSelect: false,
  },
  {
    id: 1,
    name: 'red',
    isSelect: false,
  },
  {
    id: 2,
    name: 'green',
    isSelect: false,
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
