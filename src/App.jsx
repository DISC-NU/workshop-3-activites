import './App.css'
import { useState, useEffect } from 'react';

function Item({ title, description, deadline }) {
  return(
    <div style={{ border: '1px solid black' }}>
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
  },
  {
    title: 'Laundry',
    description: 'something', 
    deadline: 'tomorrow',
  },
  {
    title: 'Laundry',
    description: 'something', 
    deadline: 'tomorrow',
  },
  {
    title: 'Laundry',
    description: 'something', 
    deadline: 'tomorrow',
  }
]

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'black' : 'white';
    document.body.style.color = darkMode ? 'white' : 'black';
  }, [darkMode]);

  return(
    <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Title text="Todo List" />
      <button 
        style={{ marginBottom: 10}}
        onClick={() => {setDarkMode(!darkMode)}}
      >
        Dark Mode
      </button>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: 'gray' }}>
        {TASKS.map((task) => {
          return(<Item title={task.title} description={task.description} deadline={task.deadline} />);
        })}
      </div>
    </main>
  );
}

export default App;
