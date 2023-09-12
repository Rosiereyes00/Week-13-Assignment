import Navbar from './Navbar';
import Loginform from './Loginform';
import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Loginform />
      </header>
    </div>
  );
}

export default App;