import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todos, setToDos] = useState(['ToDo 1', 'ToDo 2'])
  return (
    <>
      <ToDoList todos = {todos}/>
      <input type = "text" />
      <button>Add To Do</button>
      <button>Clear Completed To Dos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
