import React, { Component } from 'react';
import QuickBooking from '../../components/Home/QuickBooking/QuickBooking';
import {connect} from 'react-redux';
import {actGetListMoviesRequest} from './../../action/index';


class QuickBookingTicket extends Component {
    componentWillMount(){
        this.props.GetListMovies();
       
    }
    render() {
        var {movies}=this.props;
        // console.log(movies)
        return (
            <div>
                <QuickBooking
                   movies={this.props.movies}
                />
               
            </div>
        );
    }
   
}
const mapStateToProps=(state)=>{
  return {
     movies:state.movies
  }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        GetListMovies:()=>{
            dispatch(actGetListMoviesRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (QuickBookingTicket);