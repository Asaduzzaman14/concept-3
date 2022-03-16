import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <IncrimentDec></IncrimentDec>
    </div>
  );
}

function IncrimentDec() {

  const [count, setCount] = useState(0)

  const Incriment = () => setCount(count + 1)
  const Decriment = () => setCount(count + 1)



  return (
    <div>
      <h2>Incriment and Decrimant</h2>
      <h1>Counter:{count}</h1>
      <button onClick={Incriment}>Incriment</button>
      <button onClick={Decriment}>Dicriment</button>
    </div>
  )
}




export default App;
