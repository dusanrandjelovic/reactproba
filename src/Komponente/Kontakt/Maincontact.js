import React, { Component } from 'react';
import '../../css/Contact.css';

class Main extends Component {


    render(){
        return (
            <div className="pozadinacontact">
              <h1>Kontakt strana.</h1>
             <p>Made by Dusan</p>

             <form>
                 <label>Ime i prezime</label>
                 <input></input>
                 <label>Telefon</label>
                 <input></input>
                 <label>Komentar</label>
                 <textarea></textarea>
             </form>
            </div>
        )
    }
}


export default Main;