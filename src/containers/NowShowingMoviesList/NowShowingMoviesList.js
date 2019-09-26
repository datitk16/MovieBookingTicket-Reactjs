import React, { Component } from 'react';
import LichChieu from '../../components/Home/LichChieu/LichChieu';
import { connect } from 'react-redux';
import ItemFim from '../../components/Home/ItemFim/ItemFim';
class NowShowingMoviesList extends Component {
    render() {
        var { listMovies } = this.props;
        console.log(listMovies)
        return (
            <div>
                <LichChieu>
                    {this.ShowItemPhim(listMovies)}
                </LichChieu>
            </div>
        );
    }
    ShowItemPhim = (listMovies) => {
        let result = null;
        if (listMovies.length > 0) {
            result = listMovies.map((movie, index) => {
                return (

                    <ItemFim
                        movie={movie}
                        key={index}
                        index={index}
                    />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        listMovies: state.movies
    }
}

export default connect(mapStateToProps, null)(NowShowingMoviesList);