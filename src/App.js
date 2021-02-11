import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Intro from "./components/intro";
import Resume from "/Users/pranavarora/first/react-learning/portfolio-practice/src/components/resume.jsx";
import ReactComponents from "/Users/pranavarora/first/react-learning/portfolio-practice/src/components/reactComponents.jsx";
import NotFound from "./components/notFound";
import SiteNav from "./components/siteNav";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <React.Fragment>
          <SiteNav />
          <main className="container">
            <Switch>
              <Route
                path="/reactcomponents"
                component={ReactComponents}
              ></Route>
              <Route path="/resume" component={Resume}></Route>
              <Route path="/intro" component={Intro}></Route>
              <Route path="/notfound" component={NotFound}></Route>
              <Redirect from="/" exact to="/intro" />
              <Redirect to="/notfound" />
            </Switch>
          </main>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
