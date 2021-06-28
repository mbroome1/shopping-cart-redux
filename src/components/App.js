
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Catalogue from './Catalogue';
import Checkout from './Checkout';
import "./../styles/app.css";


const App = () => {
    return (
      <div>
        <Router>
          <Nav />
          <div className="container">
          <Switch>            
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Catalogue" component={Catalogue} />
            <Route exact path="/Checkout" component={Checkout}/>

          </Switch>
          </div>

        </Router>
      </div>
    );
}

export default App;
