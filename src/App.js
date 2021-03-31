import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="Container">
      <Router>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/admin">
             <Admin></Admin>
          </Route>
          <Route path="/login">
             <Login></Login>
          </Route>
          <Route path="/checkout">
             <Checkout></Checkout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
