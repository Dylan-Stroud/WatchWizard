import React from 'react';
// TODO: Add a comment explaining what this import statement is doing
import HelloReact from './components/HelloReact';
import LandingPage from './components/LandingPage'
import Signin from './components/Sign-in';
import CreateAccount from './components/Create-Account';
import Header from './components/Header';
import Films from './components/Films'
import Shows from './components/Shows'
import TopWeek from './components/Top-Weekly'
import Recommend from './components/Recommend'
import Watchlist from './components/Watchlist'
import './Stylesheets/body-style.css'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';


// TODO: Add a comment explaining the purpose of the App component

function App() {
  return (
    <Router>
      <div className='App'>
        
        <Header />
        <div className='Body'>
          <Switch>
            <Route path='/' exact>
              <LandingPage />
            </Route>
            <Route path='/Sign-in' exact>
              <Signin/>
            </Route>
            <Route path='/Create-Account' exact>
              <CreateAccount/>
            </Route>
            <Route path='/Films' exact>
              <Films/>
            </Route>
            <Route path='/Shows' exact>
              <Shows/>
            </Route>
            <Route path='/Top-Weekly' exact>
              <TopWeek/>
            </Route>
            <Route path='/Recommend' exact>
              <Recommend/>
            </Route>
            <Route path='/Watchlist' exact>
              <Watchlist/>
            </Route>
          </Switch>
        </div>
      
      </div>
    </Router>
  
  
  );
}

export default App;
