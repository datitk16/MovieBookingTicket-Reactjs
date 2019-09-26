import React, { Component } from 'react';
import Slider from '../../components/Home/Slider/Slider';

import QuickBookingTicket from '../../containers/QuickBookingTicket/QuickBookingTicket';
import NowShowingMoviesList from '../../containers/NowShowingMoviesList/NowShowingMoviesList';

class HomePage extends Component {
    render() {
        return (
            <div className="w-100">
                <Slider/>
               
                <QuickBookingTicket/>
               <div className="">
              <NowShowingMoviesList/>
               </div>
               
              
               
            </div>
        );
    }
}

export default HomePage;