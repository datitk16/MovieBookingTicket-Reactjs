import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Header.css";

class Header extends Component {
    LogOut=()=>{
        localStorage.removeItem('dataLogin');
        
    }
    render() {
        var data = JSON.parse(localStorage.getItem('dataLogin'));
        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
                    <a className="navbar-brand" href="#">

                        <img className="logo" src={require('./../../../images/web-logo.png')} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li>
                                <a>Lịch chiêu</a>
                            </li>
                            <li>
                                <a>Cụm Rạp</a>
                            </li>
                            <li>
                                <a>Tin tức</a>
                            </li>
                            <li>
                                <a>Ứng dụng</a>
                            </li>


                        </ul>
                        <ul className="navbar-nav mr-auto ">
                            {data ? (
                                <li className="">
                                   
                              <h5>
                              Welcome, {data.HoTen}
                              </h5>
                               
                            
                                   
                                            <NavLink to="" onClick={this.LogOut} >
                                                Đăng xuất
                                           </NavLink>
                                    
                                </li>
                            ) : (
                                    <li className="login_header">
                                        <NavLink className="login_header" to="/dangnhap"> Đăng nhập</NavLink>

                                    </li>
                                )}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;