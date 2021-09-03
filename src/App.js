import './App.css';
import Home from './components/Home.js'
import Motivation from './components/Motivation.js'
import Form from './components/Form.js'
import Rules from './components/Rules.js'
import NavBar from './components/NavBar.js'
import Admin from './components/Admin.js'
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
        <Route exact path="/Motivation/" component={Home} />
        <Route exact path="/Motivation/moti" component={Motivation} />
        <Route exact path="/Motivation/form" component={Form} />
        <Route exact path="/Motivation/about" component={Rules} />
        <Route exact path="/Motivation/admin" component={Admin} />
      </header>
    </div>
    </Router>
  );
}

export default App;
