import { FORMERR } from "dns";

live server
es7 react/redux
bracket paid colorlizer
prettier
node js modules intellisense
////
npm init   kucamo  u terminal  da instaliramo node js

/// ovo su dependecies  
npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcrypt validator

mongoose sluzi za konekciju i manipulaciju sa bazom
passport za autentifikaciju
passport-jwt za autorizaciju
jsonwebtoken za generisanje tokena iz baze
body-parser za povlacenje podataka iz baze i preuzimanje podataka iz forme 
bcrypt za enkripciju 
validator za regex validaciju forme

///
node server   //pokrece u browser

//
npm i -D nodemon   // za refresh sadrzaja dependecies kao ajax

//"start": "react-scripts start",  ovo za npm start
//"start": "node server.js",   ovo za 5000 port i node server

npm run server  // prvo  pa samo node server


<div className="App-header">
<nav>
<div>
<NavLink to='/'><img src={logo} alt="hotel logo" className="logo"/></NavLink>
</div>
<div>
   <NavLink class="a" to='/About'>CODE</NavLink>
<NavLink class="a" to='/Contact'>Contact</NavLink>
<NavLink to='/Login' id="dugme" style={{color: 'black'}} className="dugme">Uloguj se</NavLink>
<NavLink to='/Signup' id="dugme" style={{color: 'black'}} className="dugme">Registruj se</NavLink>

</div>

</nav>
</div>

<h1>Mreza divelopera</h1>
<h2><em>Kreiramo react app</em></h2>
<button>Registruj se</button>
<button>Registruj se</button>


<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
<div className="container">
  <a className="navbar-brand" href="index.html">CODE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="mobile-nav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#"> PHP programeri
        </a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Registruj se</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Uloguj se</a>
      </li>
    </ul>
  </div>
</div>
</nav>




<div className="landing">
<div className="dark-overlay landing-inner text-light">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h1 className="display-3 mb-4">Mreža divelopera
        </h1>
        <p className="lead"> Kreiramo React App!</p>
        <hr />
        <a href="#" class="btn btn-lg btn-info mr-2">Registruj se</a>
        <a href="#" class="btn btn-lg btn-light">Uloguj se</a>
      </div>
    </div>
  </div>
</div>
</div>




<footer className="bg-dark text-white mt-5 p-4 text-center">
Copyright &copy; <a target="_blank" href="https://www.linkedin.com/in/aleksandar-simovic-10">Aleksandar Simović</a>
</footer>