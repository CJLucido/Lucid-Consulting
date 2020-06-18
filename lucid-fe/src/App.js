import React from 'react';
//import logo from './logo.svg';

import './App.less';

import {Route, Switch, Link} from "react-router-dom";

import HomePage from "./components/Pages/01-HomePage";
import MissionPage from "./components/Pages/02-MissionPage";
import TeamPage from "./components/Pages/03-TeamPage";
//import TeamMember from "./components/Pages/04-TeamMember";
//import FieldworkPage from "./components/Pages/05-FieldworkPage";
//import TechPage from "./components/Pages/06-TechPage";
//import GrantsPage from "./components/Pages/07-GrantsPage";
//import ArticlesPage from "./components/Pages/08-ArticlesPage";
//import NewsPage from "./components/Pages/09-NewsPage";
import ContactPage from "./components/Pages/10-ContactPage";

import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    functionFailure
} from "./actions";

function App() {
  return (
    <div className="App">
      <header>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p class="test">Carlo Lucido</p>
        <Button type="primary">Button</Button> */}

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/mission">Mission</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            
          </li>
        </ul>
      </header>
      <Switch>

          <Route path='/home'>
            <HomePage/>
          </Route>
          <Route path='/mission'>
            <MissionPage/>
          </Route>
          <Route path='/team'>
            <TeamPage/>
          </Route>
          <Route path='/contact'>
            <ContactPage/>
          </Route>      


      </Switch>
    </div>
  );
}

const mapDispatchToProps = {
  somefunction,
  functionFailure
}

export default connect(state => state, mapDispatchToProps)(App);
