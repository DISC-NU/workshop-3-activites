import './App.css'

function Item(title, description, deadline) {
  return(
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{deadline}</span>
    </div>
  );
}

function App() {
  return(
    <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>TODO LIST</h1>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: 'gray' }}>
        <Item title='Laundry' description='cool desc' deadline='tomorrow' />
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
