import React, { Component } from 'react';
import './LichChieu.css';
import ItemFim from '../ItemFim/ItemFim';


class LichChieu extends Component {
    render() {
        return (
            <div className="Showtimes">
               
                <div >
               <div className="fim_item">
               {this.props.children}
               </div>
                
                </div>
              
            </div>
        );
    }
}

export default LichChieu;