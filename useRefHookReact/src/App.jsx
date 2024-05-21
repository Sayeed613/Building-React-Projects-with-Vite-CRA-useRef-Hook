import FocusableInput from './Components/FousableInput';
import UncontrolledInput from './Components/UncontrolledInput';
import ColorChanger from './Components/ColorChanger';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>useRef Hook Demo</h1>
        <FocusableInput />
        <UncontrolledInput />
        <ColorChanger />
      </header>
    </div>
  );
}

export default App;
