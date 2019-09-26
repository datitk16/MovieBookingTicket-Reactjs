import * as Types from './../constants/HeaderAction';
import CallapiUser from "../utils/CallapiUser";
import CallapiMovies from './../utils/CallapiMovies';

export const actLoginUserReques = (user) => {
    console.log(user)
    return dispatch => {

        return CallapiUser(`DangNhap?taikhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`, 'POST', null).then(res => {
            dispatch(actLoginUser(res.data,user.history))

        })
    }
}
export const actLoginUser = (user,history) => {
    return {
        type: Types.LOGIN_USER,
        user,
        history
    }
}
export const actGET_LIST_USER_Request = () => {
    return dispatch => {

        return CallapiUser('LayDanhSachNguoiDung?MaNhom=GP01', 'GET', null).then(res => {
            dispatch(actGetListUser(res.data))

        })
    }
}
export const actGetListUser = (allUser) => {
    return {
        type: Types.GET_LIST_USER,
        allUser
    }
}
export const actGetListMoviesRequest=()=>{
    return dispatch=>{
          return CallapiMovies('LayDanhSachPhim?MaNhom=GP05','GET',null).then(res=>{
              dispatch(actGetListMovies(res.data))
             
          })
    }
}
export const actGetListMovies=(movies)=>{
    return{
        type: Types.GET_LIST_MOVIES,
        movies
    }
    
    
}
//get fim detail
export const actGetDetailMoviesRequest=(maPhim)=>{
    return dispatch=>{
          return CallapiMovies(`LayChiTietPhim?MaPhim=${maPhim}`,'GET',null).then(res=>{
              dispatch(actGetDetailMovie(res.data))
             
          })
    }
}
export const actGetDetailMovie=detailmovie=>{
    return{
        type: Types.GET_DETAIL_MOVIE,
        detailmovie
    }
    
    
}
