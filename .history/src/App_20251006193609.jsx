import './App.css'

function Item({ title, description, deadline }) {
  return(
    <div style={{ border: '1px solid black' }}>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{deadline}</span>
    </div>
  );
}

function Title({ title }) {
  return (
    <h1>{title}</h1>
  )
}

function App() {
  return(
    <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Title title="Todo List" />
      <button 
        style={{ marginBottom: 10}}
        onClick={() => {}}
      >
        Dark Mode
      </button>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: 'gray' }}>
        <Item title='Laundry' description='cool desc' deadline='tomorrow' />
        <Item title='cool' description='cool desc' deadline='tomorrow' />
        <Item title='awesome' description='cool desc' deadline='tomorrow' />
        <Item title='this is cool' description='cool desc' deadline='tomorrow' />
      </div>
    </main>
  );
}

export default App
