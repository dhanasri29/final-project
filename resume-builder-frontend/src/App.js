// resume-builder-frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import CreateResume from './components/CreateResume';
import './App.css';



const App = () => {
  return (
  
    <div>
       <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Register" component={Register} />
      <Route path="/create-resume" component={CreateResume} />
    </Switch>
    </Router>
  </div>
  
  );
};

export default App;



