import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';  // { Link }  stavja to="/login"  sa malo slovo i <Link  />
import logo from '../Slike/hahatrans.png';
//import './Header.css';
//import '../App.css';

class Header extends Component {


    render(){
        return (
          

<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
<div className="container">
<NavLink to='/'><img src={logo} alt="hotel logo" className="logo"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="mobile-nav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <NavLink className="nav-link" to='/Contact'>Contact</NavLink>
      </li>
      <li><NavLink className="nav-link" to='/programeri'>PHP programeri</NavLink></li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink to='/Signup' className="nav-link">Registruj se</NavLink> 
      </li>
      <li className="nav-item">
        <NavLink to='/Login' className="nav-link">Uloguj se</NavLink>
      </li>
    </ul>
  </div>
</div>
</nav>

        )
    }
}


export default Header;
