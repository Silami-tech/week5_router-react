import React, { Component } from 'react';
import  './header.css';
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
  import About from './About';
  import HomePage from './HomePage';



class Header extends Component {
    render() {
        return (
            <div class="header">
                <nav>
                    <ul>
                        <li><a>
                        <Link to = "/">Home</Link>
                    </a></li>
                        <li><a><Link to = "/contact">Infos</Link></a></li>
                        <li> <a><Link to = "/login">Log in</Link></a></li>
                    </ul>
                </nav>
          </div>     
        )
    }
}

export default Header;