import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import ProductDetail from './components/ProductDetail/ProductDetail';

export const UserContext = createContext();

function App() {
  const [loggedinUser , setLoggedinUser] = useState({});
  return (
    <div className="Container">
      <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <Router>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/login">
             <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
             <Admin></Admin>
          </PrivateRoute>
           

           <Route path="/productDetail">
             <ProductDetail></ProductDetail>
          </Route>
          {/* <Route path="/checkout/id">
          <Checkout></Checkout>
          </Route> */}
          {/* <Route exact path="/checkout/:id" component={Checkout} /> */}
          <Route path="/order">
          <Order></Order>
          </Route>
          <Route exact path="/checkout/:id">
          <Checkout></Checkout>
          </Route>
          

          {/* <PrivateRoute path="/checkout">
             <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/order">
             <Order></Order>
          </PrivateRoute> */}
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
