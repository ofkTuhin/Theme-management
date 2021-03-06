
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import GetData from './Component/Home/GetData/GetData';
import ThemeFeature from './Component/Theme/ThemeFeture/ThemeFeature';
import UpdateData from './Component/UpdateData/UpdateData';
import Navbar from './Component/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
                <Switch>
                  
                <Route path='/getData'>
                    <GetData/>
                </Route>
                <Route path="/themeFeature">
                  <ThemeFeature/>
                </Route>
                <Route path='/updatePage/:id'>
                  <UpdateData/>
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
