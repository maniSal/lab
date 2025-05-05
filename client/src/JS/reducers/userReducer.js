//

import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER } from "../actionTypes/userActionTypes"

const initialState={
    usersList:[],
    user:{},
    isLoad:false,
    errors:[],
    success :[]
}

const userReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_USER: return{...state,isLoad:true}
        case GET_ALL_USERS :
            //console.log(payload)
            return{...state,isLoad:false,user:payload,success:payload.success}
        case GET_USER :return{...state,isLoad:false,user:payload.listUsers,success:payload.success}
        case DELETE_USER :
           const newlist =state.usersList.filter(el=>el._id!==payload) 
         

        return{...state, isLoad:false,usersList:newlist, success:payload.success}
        case FAIL_USER : return{...state,isLoad:false,errors:payload}
        default:
           return state
    }
}


export default userReducer 