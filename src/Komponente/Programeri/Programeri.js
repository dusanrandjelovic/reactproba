import React, { Component } from 'react'

import Header from '../Header'; 

import { Slajder } from './Slajder'
import { Info } from './Info'

import Footer from '../Footer';

export default class Programeri extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 style={{textAlign: 'center', margin: '0 0 30px'}}>PHP programeri</h1>
                <Slajder />
                <Info />
                <Footer />
            </div>
        )
    }
}
