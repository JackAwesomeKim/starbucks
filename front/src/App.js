import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";

import Footer from "./Footer";


import Menu from './Menu';
import Main from './Main';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/main" element={<Main/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
      <Footer/>
  </Router> 
  );
}

export default App;
