import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
  render(){
      return(
          <div>

              <NavLink to='/'>HOME</NavLink>
              <NavLink to='/About'>About</NavLink>
              <NavLink to='/Contact'>Contact</NavLink>
          </div>
      )
  }
}