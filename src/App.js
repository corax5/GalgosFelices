import './App.css';
import { Modal } from './Components/Modal';
import { MisRutas } from './router/MisRutas';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='layout'>
          <MisRutas />
        </div>
      </header>
    </div>
  );
}

export default App;
