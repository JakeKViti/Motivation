import './App.css';
import Home from './components/Home.js'
import Motivation from './components/Motivation.js'
import Form from './components/Form.js'
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
        <Route exact path="/motd" component={Motivation} />
        <Route exact path="/form" component={Form} />
      </header>
    </div>
    </Router>
  );
}

export default App;
