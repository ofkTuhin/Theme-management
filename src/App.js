
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import GetData from './Component/Home/GetData/GetData';

function App() {
  return (
    <div className="App">
      <Router>
                <Switch>
                <Route path='/getData'>
                    <GetData/>
                </Route>

                <Route path='/'>
                    <Home></Home>
                </Route>

                </Switch>
            </Router>
    </div>
  );
}

export default App;
