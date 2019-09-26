import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TaiKhoan: "",
            MatKhau: ""
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.userLogin(this.state);
    }
  
    onChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
              [name]:value
        })
    }

    render() {
        
        return (
            <div>

                <div className="container" id="container">
                    <div className="form-container sign-in-container">

                        <form onSubmit={this.onSubmit}>
                            <h1>Sign in</h1>
                            <span>or use your account</span>
                            <input type="text"
                                value={this.state.TaiKhoan}
                                onChange={this.onChange}
                                name="TaiKhoan"
                                placeholder="Tài khoản" />
                            <input type="password"
                                value={this.state.MatKhau}
                                onChange={this.onChange}
                                name="MatKhau"
                                placeholder="Mật khẩu" />
                            <a href="#">Forgot your password?</a>
                            <button type="submit">Sign In</button>
                        </form>
                    </div>

                </div>
                <footer>
                    <p>
                        Created with <i className="fa fa-heart" /> by
            <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                        - Read how I created this and how you can join the challenge
            <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
          </p>
                </footer>
            </div>

        );
    }
}


export default LoginForm;
