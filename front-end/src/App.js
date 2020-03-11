import React from 'react';
import Index from './components/Nav';
import List from './containers/List';
import CreateData from './components/CreateData';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
        <Index/>
        <Route path="/" exact component={List}/>
        <Route path="/update/:id" component={CreateData}/>
        <Route path="/create" component={CreateData}/>
      </Router>
    </div>
  );
}

export default App;
