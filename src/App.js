import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
                <Switch>

                <Route path='/'>
                    <Home></Home>
                </Route>

                </Switch>
            </Router>
    </div>
  );
}

export default App;
