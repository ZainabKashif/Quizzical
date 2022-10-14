import React from 'react';
import Quiz from './Components/Quiz';
import './App.css';
import data from './data';
import { nanoid } from 'nanoid';
import Navbar from './Navbar';
function App() {
  const mapping = data.map(item => {
    return (
      <Quiz
        key={nanoid()}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar value={data.length} />
      <hr className='line'></hr>
      {mapping}
    </div>
  );
}

export default App;
