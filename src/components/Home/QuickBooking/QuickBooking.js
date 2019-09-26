import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetDetailMoviesRequest } from './../../../action/index';
import './QuickBooking.css';

class QuickBooking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MaPhim: "",
            LichChieu: "",
            status: true
        }
    }
    onChange = e => {
        const target = e.target;
        const value = Number.parseInt(target.type === 'checkbox' ? target.checked : target.value);
        let name = target.name;
        console.log(value)
        //chay bat dong bo
        this.setState({
            [name]: value,
            status: false

        }, () => {
            if (name === "MaPhim") {
                this.props.getMovieDetail(value)
            }

        }
        )
    }
    render() {
        let { movies, movieDetail } = this.props;
        let { MaPhim, status } = this.state
        console.log(this.props.movieDetail)
        return (

            <div className="container_booking">
                <div className="row row_content">
                    <div className="col-md-5 select">
                        <select className="custom-select"
                            onChange={this.onChange}
                            name="MaPhim"
                            value={MaPhim}
                        >
                            <option >Chọn phim</option>
                            {this.ShowNameItemFim(movies)}
                        </select>
                    </div>
                    <div className="col-md-5 select">
                        <select className="custom-select" disabled={status ? 'disabled' : ''}>
                            <option selected>Ngày xem</option>
                            {this.ShowTimeDetailFim(movieDetail.LichChieu)}

                        </select>

                    </div>
                    <div className="col-md-2 select">
                        <button type="button" className="btn">Đặt vé ngay</button>
                    </div>
                </div>
            </div>
        );
    }
    ShowNameItemFim = (movies) => {
        let result = null;
        if (movies.length > 0) {
            result = movies.map((movie, index) => {
                return (
                    <option
                        key={index}
                        value={movie.MaPhim}>
                        {movie.TenPhim}
                    </option>
                )
            })
        }
        return result;
    }
    ShowTimeDetailFim = (movieDetail) => {
        console.log(movieDetail)
        let result = null;
        if (movieDetail) {
            result = movieDetail.map((item, index) => {
                let movieTime = item.NgayChieuGioChieu;
                let i = movieTime.search("T");
                let movieDays = movieTime.slice(0, i);
                return (
                    <option
                        key={index}
                    >
                        {movieDays}
                    </option>
                )
            })
        }
        return result;

    }
}
const mapStateToProps = state => {
    return {
        movieDetail: state.movieBooking
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getMovieDetail: (maPhim) => {
            dispatch(actGetDetailMoviesRequest(maPhim));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickBooking);