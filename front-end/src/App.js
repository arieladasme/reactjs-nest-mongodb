import React from 'react';
import Nav from './components/Nav';
import List from './components/List';
import CreateData from './components/CreateData';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Route path="/" exact component={List}/>
        <Route path="/edit/:id" component={CreateData}/>
        <Route path="/create" component={CreateData}/>
      </Router>

    </div>
  );
}

export default App;
