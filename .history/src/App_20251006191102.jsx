import './App.css'

function App() {
  return(
    <main style={{ backgroundColor: 'gray'}}>
      <h1>TODO LIST</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div className='task'>
          <h4>Washing laundry</h4>
          <p>Wash</p>
          <span>tomorrow</span>
        </div>
        <div className='task'>
          <h4>Washing laundry</h4>
          <p>Wash</p>
          <span>tomorrow</span>
        </div>
        <div className='task'>
          <h4>Washing laundry</h4>
          <p>Wash</p>
          <span>tomorrow</span>
        </div>
        <div className='task'>
          <h4>Washing laundry</h4>
          <p>Wash</p>
          <span>tomorrow</span>
        </div>
      </div>
    </main>
  );
}

export default App
