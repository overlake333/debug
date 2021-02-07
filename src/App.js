import './App.css';
import Navbar from './components/Navbar/Navbar';
import Splash from './components/Splash';
import Plans from './components/Parent/Plans';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <Counter />
      <Plans />
    </div>
  );
}

export default App;
