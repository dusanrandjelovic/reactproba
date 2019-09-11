import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
//import './Main.css';

class Main extends Component {


    render(){
        return (
         
<div className="landing">
<div className="dark-overlay landing-inner text-light">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h1 className="display-3 mb-4">Mreža divelopera
        </h1>
        <p className="lead"> Kreiramo React App!</p>
        <hr />
        <NavLink to='/Signup'  class="btn btn-lg btn-info mr-2">Registruj se</NavLink>
        <NavLink to='/Login'  class="btn btn-lg btn-light">Uloguj se</NavLink>
      </div>
    </div>
  </div>
</div>
</div>
        )
    }
}


export default Main;

