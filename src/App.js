import './App.css';
import Navbar from './components/Navbar/Navbar';
import Splash from './components/Splashes';
import Plans from './components/Parents/Plans';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <Plans />
    </div>
  );
}

export default App;
