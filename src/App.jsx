import './App.css'
import { useState, useEffect } from 'react';

function Item({ title, description, deadline, done, handleDone }) {
  const bgColor = done ? 'green' : 'lightpink';
  return(
    <div style={{ border: '1px solid black', backgroundColor: bgColor, cursor: 'pointer' }} onClick={handleDone}>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{deadline}</span>
    </div>
  );
}

function Title({ text }) {
  return(
    <h1>{text}</h1>
  );
}

const TASKS = [
  {
    title: 'Laundry',
    description: 'something', 
    deadline: 'tomorrow',
    done: false
  },
  {
    title: 'Laundry',
    description: 'something', 
    deadline: 'tomorrow',
    done: false
  },
  {
    title: 'Laundry',
    description: 'something', 
    deadline: 'tomorrow',
    done: false
  },
  {
    title: 'Laundry',
    description: 'something', 
    deadline: 'tomorrow',
    done: false
  }
]

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState(TASKS);

  const handleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'black' : 'white';
    document.body.style.color = darkMode ? 'white' : 'black';
  }, [darkMode]);

  return(
    <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Title text="Todo List" />
      <button 
        style={{ marginBottom: 10, backgroundColor: darkMode ? 'grey' : 'lightgrey', color: darkMode ? 'white' : 'black' }}
        onClick={() => {setDarkMode(!darkMode)}}
      >
        Dark Mode
      </button>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 5}}>
        {tasks.map((task, index) => {
          return(<Item title={task.title} description={task.description} deadline={task.deadline} done={task.done} handleDone={() => {handleDone(index)}} />);
        })}
      </div>
    </main>
  );
}

export default App;
