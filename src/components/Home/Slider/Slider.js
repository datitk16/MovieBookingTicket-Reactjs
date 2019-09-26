import React, { Component } from 'react';
import './Slider.css'

class Slider extends Component {

    render() {
        return (
      
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require('./../../../images/carousel1.jpg')} className="image" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('./../../../images/carousel2.jpg')}  className="image" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('./../../../images/slider2.jpg')}  className="image" alt="Second slide" />
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



        
        );
    }
}

export default Slider;