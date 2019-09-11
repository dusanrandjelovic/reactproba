import React from 'react'
import slajderslika from './slajderslika.jpg';
import slajderslika2 from './slajderslika2.jpg';
import slajderslika3 from './slikaslajder3.jpg';

export function Slajder() {
    return (
        <div style={{width: '70%', margin: '0 auto'}}>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slajderslika} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slajderslika2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slajderslika3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}
