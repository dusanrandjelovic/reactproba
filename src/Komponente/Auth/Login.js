import React, { Component } from 'react';
import Header from '../Header'; 

import Footer from '../Footer';

class Login extends Component {

  constructor(){
    super();
    this.state={
        email: '',
        password: '',
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
      email: this.state.email,
      password: this.state.password,
  }
  console.log(newUser);
}


    render(){
        return (
            <div>
              
              <Header />
   
                       
<div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Uloguj se</h1>
          <p className="lead text-center">Uloguj se na Mrežu divelopera Code akademije!</p>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="email" className="form-control form-control-lg" onChange={this.onChange} value={this.state.name}
              placeholder="e-mail adresa" name="email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" onChange={this.onChange} value={this.state.password}
              placeholder="Šifra" name="password" />
            </div>
            <button type="submit" className="btn btn-info btn-block mt-4">Uloguj se</button>
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


export default Login;



/*






    <div className="container" className="logomotac">
  <h2 style={{textAlign: 'center'}}>Uloguj se</h2>
  <p>Ulogujte se na mrezu developera</p>

  <form action="/action_page.php">
    <div className="form-group">
      <label for="email"></label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div className="form-group">
      <label for="pwd"></label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

</div>
        
*/