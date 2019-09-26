import React, { Component, Fragment } from 'react';
import LoginForm from "../../components/Home/LoginForm/LoginForm";
class FormLoginPage extends Component {
   
    

  
    render() {
        return (
            <Fragment>
               
                <LoginForm
                   
                    userLogin={this.props.userLogin}
                    
                />

            </Fragment>
        );
    }
}
export default FormLoginPage;