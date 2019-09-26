import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormLoginPage from "../../pages/FormLoginPage/FormLoginPage";
import { actLoginUserReques, actGET_LIST_USER_Request,actHistoryToStore } from './../../action/index';
class HeaderAction extends Component {
    userLogin = userLogin => {
        let {history}=this.props;
        this.props.LoginUser(userLogin.TaiKhoan, userLogin.MatKhau,history);
      
    };
    //lấy danh sách user
    componentWillMount() {
        this.props.GetALLUSER();
    }

    render() {
      
        return (
            <div>
                <FormLoginPage
                    userLogin={this.userLogin}
                    
                />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        LoginUser: (TaiKhoan, MatKhau,history) => {
            dispatch(actLoginUserReques({TaiKhoan, MatKhau,history}))
        },
        GetALLUSER: () => {
            dispatch(actGET_LIST_USER_Request())
        }
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAction);