import React, {useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [state, setState] = useState([]);
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
