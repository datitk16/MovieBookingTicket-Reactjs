import * as Types from './../constants/HeaderAction';
import swal from "sweetalert2";
let data = JSON.parse(localStorage.getItem('dataUser'));

let initialState = data ? data : [];

let findIndex = (users, TaiKhoan, MatKhau) => {
   let result = -1;
   users.forEach((user, index) => {
      if (user.TaiKhoan === TaiKhoan && user.MatKhau === MatKhau) {
         result = index;
      }
   });
   return result;
}
const users = (state = initialState, action) => {
   switch (action.type) {
     
      case Types.LOGIN_USER:
         state = action.user;
        let history=action.history;

         console.log(action)
         let index = findIndex(data, state.TaiKhoan, state.MatKhau);
         if (index != -1) {
            localStorage.setItem('dataLogin', JSON.stringify(state));
            swal.fire(
               {
                  type: 'Success',
                  title: 'Đăng nhập thành công',
                  text: 'Bạn đã đăng nhập thành công',
                  showConfirmButton: false,
                  timer: 1500
               }
            )
            history.push("/");
          
         }
         else {
            swal.fire(
               {
                  type: 'Fail',
                  title: 'Đăng nhập thất bại',
                  text: 'Tài khoản hoặc mật khẩu không đúng !',
                  showConfirmButton: false,
                  timer: 1500
               }
            )
         }

         return state;
     
      case Types.GET_LIST_USER:
         state = action.allUser;
         localStorage.setItem('dataUser', JSON.stringify(state))
         return state;

      default: return state;
   }
}
export default users;