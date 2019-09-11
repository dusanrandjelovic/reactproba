import React, { Component } from 'react';
//import './About.css';
import Header from '../Header'; 
import Maincontact from './Maincontact';
import Footer from '../Footer';

class Contact extends Component {
    render(){
    return (
      <div className="App">
       <Header />
        <Maincontact />
        <Footer />
      </div>
    );
    }
  }
  
  export default Contact;