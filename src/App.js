import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <FoodBox foods={foods} />
    </div>
  );
}

export default App;
