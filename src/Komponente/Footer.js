import React, { Component } from 'react';
//import './Footer.css';

class Footer extends Component {

    render(){
        return (
            <footer className="bg-dark text-white mt-5 p-4 text-center">
               <p>&copy; {new Date().getFullYear()} Dusan Randjelovic</p>
            </footer>
        )
    }
}


export default Footer;