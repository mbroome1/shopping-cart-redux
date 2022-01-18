
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Catalogue from './Catalogue';
import Checkout from './Checkout';
import NotFound from './NotFound';
import "./../styles/app.scss";


const App = () => {
    return (
      <div>
        <Router basename="/cart">
          <Nav />
          <div className="container">
          <Switch>            
            <Route exact path="/" component={Catalogue} />
            {/*<Route exact path="/About" component={About} />*/}
            {/*<Route exact path="/Catalogue" component={Catalogue} />*/}
            <Route exact path="/checkout" component={Checkout}/>
            <Route path="*" component={NotFound}></Route>

          </Switch>
          </div>

        </Router>
      </div>
    );
}

export default App;
