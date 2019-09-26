import * as Types from './../constants/HeaderAction';
let initialState = [];

const movies = (state = initialState, action) => {
    switch (action.type) {
        
        case Types.GET_DETAIL_MOVIE:
            state=action.detailmovie
            // console.log(action)
            return state;
           
        default: return state;

    }
}
export default movies;

