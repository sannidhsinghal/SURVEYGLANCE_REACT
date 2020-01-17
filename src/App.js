import React from 'react';
import UserData from './components/UserData.js'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
     <Router>
       <Route path="/" component={UserData}/>
       </Router>
    </div>
  );
}

export default App;
