import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  const name = "John Doe";

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/about/${name}`}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/about/:name" component={About} />
          <Route path="/contact" component={Contact} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
