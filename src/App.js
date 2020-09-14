import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import { YearPage, NavBar, Month } from './components';

export default class App extends Component {

  render() {
    return (
      <Router>
        <NavBar/>
          <Route path="/year/:year" exact render={({ match }) => {
            return (
              <YearPage year={match.params.year}/> 
            )
          }}/>
           <Route path="/year/:year/month/:month" exact render={({ match }) => {
            return (
              <div className="month-page">
              <Month startDate={new Date(Number(match.params.year), Number(match.params.month) - 1)}/> 
              </div>
            )
          }}/>

          <Route path="/today" exact render={() => {
          const today = new Date();
          const redirectPath = `/year/${today.getFullYear()}`;
          return (<Redirect to={redirectPath}/>);
        }
        } />
      </Router>
    );
  }
}

