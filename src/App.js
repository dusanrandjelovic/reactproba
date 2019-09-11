import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';  // {BrowserRouter as Router}

import './css/App.css';

import Home from './Komponente/Home/Home';
import Contact from './Komponente/Kontakt/Contact';
import Login from './Komponente/Auth/Login';
import Signup from './Komponente/Auth/Signup';
import Programeri from './Komponente/Programeri/Programeri';
import Error from './Komponente/Error';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/contact" component={Contact} exact />
    <Route path="/programeri" component={Programeri} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/signup" component={Signup} exact />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
    
  );
}

export default App;


//npm i react-router-dom   za navigaciju

/*
<Router>
<Header />
<Route exact path="/" component={ Main } />
<div className="container">
<Route exact path="/register" component={ Register } />
<Route exact path="/login" component={ Login } />
</div>
<Footer />
</Router>
*/

// https://react-bootstrap.github.io/components/navs/

// react developer tools