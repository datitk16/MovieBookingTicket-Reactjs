import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './ItemFim.css';
class ItemFim extends Component {
    render() {
        let { movie } = this.props;

        return (
            <div className="fim-item">
                <div class="modal" id="trailer">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <a href="#" class="hanging-close" data-dismiss="modal" aria-hidden="true">
                                {/* <img src={require('./../../../images/Review2.jpg')} /> */}
                                <ReactPlayer url={movie.Trailer}  id="youtobe" />
                            </a>
                            <div class="scale-media" id="trailer-video-container"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 movie-tile text-center">
                    
                    <div class="movie-img" data-trailer-youtube-id="Yd4DBq8a2y0" data-toggle="modal" data-target="#trailer">
                        <a href="#">
                            <figure>

                                <img class="background_img" src={movie.HinhAnh} />

                                <div class="date"><span class="card-date-day">20</span><span class="card-date-month">APR</span></div>
                                <figcaption>
                                    <h4> <span>{movie.TenPhim}</span></h4>
                                    {/* <p>{movie.MoTa}</p> */}
                                </figcaption>
                            </figure></a>
                    </div>
                    <div className="w-100">
                    <button className="btn bookingTicket">Mua vé</button>
                    </div>
                    
                </div>
            </div>




        );
    }
}

export default ItemFim;