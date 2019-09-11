import React, { Component } from 'react';

import Header from '../Header';  //fajlovi bi trebali da se prave sa velika slova Header
import Main from './Main';
import Footer from '../Footer';

class Home extends Component {
    render(){
  return (
    <div className="App">
     <Header />
      <Main />
      <Footer />
    </div>
  );
    }
}

export default Home;
