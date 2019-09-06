import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./app/serviceWorker";
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// const App = React.lazy(() => import('./pages/index.jsx'));
const App = React.lazy(() => import('./app/App'));
const Login = React.lazy(() => import('./pages/Login/index'));

ReactDOM.render(
  <HashRouter>
    <React.Suspense fallback={loading()}>
      <Switch>
          <Route path="/login" name="Login" render={props => <Login {...props}/>} />
          <Route path="/" name="App" render={props => <App {...props}/>} />
      </Switch>
    </React.Suspense>
  </HashRouter>
, document.getElementById("root")
);

serviceWorker.unregister();
