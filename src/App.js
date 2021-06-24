import './App.css';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route exact path="/" component={Home} />
      </header>
    </div>
    </Router>
  );
}

export default App;
