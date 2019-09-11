import React, { Component } from 'react';
import Header from '../Header'; 

import Footer from '../Footer';

class Signup extends Component {

constructor(){
    super();
    this.state={
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: []                                                  
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
} 

onChange(e){
    this.setState({
        [e.target.name]: e.target.value
    });                                                                           
}

onSubmit(e){
  e.preventDefault();
  const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
  }
  console.log(newUser);
}

    render(){
        return (
            <div>
              
              <Header />
              
              <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Registruj se</h1>
          <p className="lead text-center">Kreiraj svoj nalog na Mreži divelopera Code akademije!</p>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" onChange={this.onChange}
              placeholder="Ime" name="name" value={this.state.name} />
            </div>
            <div className="form-group">
              <input type="email" className="form-control form-control-lg" onChange={this.onChange}
              placeholder="e-mail adresa" name="email" value={this.state.email}/>
              <small className="form-text text-muted">Ova mreža koristi Gravatar! Koristi svoj e-mail nalog da bi primenio Gravatar sliku!</small>
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" onChange={this.onChange}
              placeholder="Upiši šifru" name="password" value={this.state.password}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" onChange={this.onChange}
              placeholder="Ponovi šifru" name="password2" value={this.state.password2}/>
            </div>
            <button type="submit" className="btn btn-info btn-block mt-4">Pošalji zahtev</button>
          </form>
        </div>
      </div>
    </div>
  </div>


               <Footer />
               
            </div>
        );
    }
}


export default Signup;

/*






  <div className="container" className="logomotac">
  <h2 style={{textAlign: 'center'}}>Registruj se</h2>
  <p>Registrujte se na mrezu developera</p>

  <form action="/action_page.php">
  <div className="form-group">
      <label for="name"></label>
      <input type="text" className="form-control" id="name" placeholder="Ime" name="name"/>
    </div>
    <div className="form-group">
      <label for="email"></label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div className="form-group">
      <label for="pwd1"></label>
      <input type="password" className="form-control" id="pwd1" placeholder="Enter password" name="pswd1"/>
    </div>
    <div className="form-group">
      <label for="pwd2"></label>
      <input type="password" className="form-control" id="pwd2" placeholder="Ponovi sifru" name="pswd2"/>
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

</div>

*/