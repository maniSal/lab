//import 

import { ADD_COUR, DELETE_COUR, EDIT_COUR, FAIL_COURS, GET_COURS, GET_ONE_COUR, LOAD_COUR } from "../actionTypes/courActionTypes";


//initialisation 
const initialState={
    loadP :false,
    cours:[],
    cour:{},
    success:false,
    errors:null,
    

}

//pure function


const courReducer = (state=initialState,{type,payload})=>{

    switch (type) {
        case LOAD_COUR:return {...state,loadP:true}
        case GET_COURS :return{...state,loadP:false,cours:payload,success:true}
        case GET_ONE_COUR:return{...state,loadP:false,cour:payload.courToGet,success:true}
        case ADD_COUR :return{...state,loadP:false,cours:[...state.cours,payload.newCour],success:true}
        case EDIT_COUR : return{...state,loadP:false,cours:state.cours.map((cour)=>cour._id===payload.id?{...cour,...payload.courToedit}:cour)}
        case DELETE_COUR:return{...state,loadP:false,cours:state.cours.filter(cour=>cour._id!==payload.id),success:true}
        case FAIL_COURS:return{...state,loadP:false,errors:payload,success:false}
           
    
        default:
            return state;
    }













}


export default courReducer