import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedinUser , setLoggedinUser] = useState({});
  return (
    <div className="Container">
      <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
        <p>Name:{loggedinUser.name}</p>
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
