import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
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




 function BasicExample() {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/about">
            <About />
          </Route>
          <Route exact path = "/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home(){
  return(
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About(){
  return(
    <div>
    <h2>About</h2>
  </div>
  );
}

function Dashboard(){
  return(
    <div>
    <h2>Dashboard</h2>
  </div>
  );
}


function ParamsExample() {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to = "/netflix">Netflix</Link>
          </li>
          <li>
            <Link to = "/gmail">Gmail</Link>
          </li>
          <li>
            <Link to = "/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to = "/amazon">Amazon</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path = "/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}


function Child() {
  let{id} = useParams();
  return(
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}

function NestingExample() {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>

          <Route exact path = "/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Topics(){
  let{path,url} = useRouteMatch();
  return(
    <Router>
    <div>
      <h2>Topics</h2>
    <ul>
      <li>
        <Link to = {`${url}/Sate, Nasi goreng`}>Kuliner</Link>
      </li>
      <li>
        <Link to = {`${url}/Wisata alam, Museum`}>Travelling</Link>
      </li>
      <li>
         <Link to = {`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
      </li>
  
    </ul>
    <hr />
    <Switch>
      <Route exact path = {path} >
        <h3>Please Select a topic</h3>
      </Route>
      <Route path = {`${path}/:topicId`}>
        <Topic />
      </Route>
    </Switch>
  </div>
  </Router>
  )
}

function Topic(){
  let{topicId} = useParams();
  return(
    <div>
      <h3>use {topicId}</h3>
    </div>
  );
}


 function AuthExample() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fakeAuth = {
    isAuthenticated: isAuthenticated,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setIsAuthenticated(true);
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      setIsAuthenticated(false);
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

  return (
    <Router>
      <div>
        <AuthButton fakeAuth={fakeAuth} isAuthenticated={isAuthenticated} />

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage fakeAuth={fakeAuth} />
          </Route>
          <PrivateRoute path="/protected" fakeAuth={fakeAuth}>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function AuthButton(props) {
  const { fakeAuth, isAuthenticated } = props;
  let history = useHistory();

  return isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { fakeAuth } = rest;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage(props) {
  const { fakeAuth } = props;

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
