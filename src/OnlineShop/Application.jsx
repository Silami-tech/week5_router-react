import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Header from './header';
import HomePage from './HomePage';
import About from './About';
import Contact from './info';
import Details from './Details'


function Application() {
    return(
        <div>
        <Router>
            <Header />
          <Switch>
            <Route exact path = "/">
                <HomePage />
            </Route>
            <Route exact path = "/contact">
                <Contact />
            </Route>
            <Route exact path ={`/:topicId/:price`}>
                <Details />
            </Route>
            <Route exact path ={`/login`}>
                <About />
            </Route>
          </Switch>
        </Router>
            
        </div>
    );
}  export default Application;