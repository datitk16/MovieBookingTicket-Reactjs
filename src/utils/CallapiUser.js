import axios from 'axios';
import * as Config from './../constants/Config';    
export default function CallapiUser(endpoint,method='GET',body){
    return axios({
        method:method,
        url:`${Config.API_USER}/${endpoint}`,
        data:body
    }).catch(err=>{
        console.log(err)
    })
}
