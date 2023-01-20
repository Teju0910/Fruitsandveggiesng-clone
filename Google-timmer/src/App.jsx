
import { useState } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timmer from './components/Timmer';

function App() {
  const [show,setshow] = useState(true);

  return (
    <div className="App">

<button onClick={()=> setshow(!show)}>
     {show ? "Display Timer" : "Display Stopwatch" }
      </button> 
{show ?  <Stopwatch/> :  <Timmer/>}
         
    </div> 
  );
}

export default App;
