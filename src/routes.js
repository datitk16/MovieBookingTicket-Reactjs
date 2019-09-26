import React from "react";
import HeaderAction from "./containers/HeaderAction/HeaderAction";
import HomePage from "./pages/HomePage/HomePage";

const routes=[
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/dangnhap',
        exact:false,
        main:({history})=><HeaderAction history={history} />
    }
]
export default routes;