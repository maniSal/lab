import axios from "axios";
import { ADD_COUR, DELETE_COUR, EDIT_COUR, FAIL_COURS, GET_COURS, GET_ONE_COUR, LOAD_COUR } from "../actionTypes/courActionTypes";
///
export const getAllCour=()=>async(dispatch)=>{

    dispatch({
        type:LOAD_COUR
    })

    try {
        const result = await axios.get('/api/cour/AllCour')
        dispatch({
            type:GET_COURS,
            payload:result.data.listCour

        })
        //console.log(result)
    } catch (error) {
        dispatch({
            type:FAIL_COURS,
            payload:error.response.data
        })
    }
}

///

export const AddCour=(newCour)=>async(dispatch)=>{
    dispatch({
        type:LOAD_COUR
    })
    try {
       const result = await axios.post('/api/cour/AddCour',newCour)
       dispatch({
        type:ADD_COUR,
        payload:result.data
       })
    } catch (error) {
        dispatch({
            type:FAIL_COURS,
            payload:error.response.data
        })
    }}

    ///
export const getOneCour=(id)=>async(dispatch)=>{
    dispatch({
        type:LOAD_COUR
    })
    try {
        const result = await axios.get(`/api/cour/${id}`)
        dispatch({type:GET_ONE_COUR,payload:result.data})
        
    } catch (error) {
        dispatch({
            type:FAIL_COURS,
            payload:error.response.data
        })
    }
}

///
export const editCour=(id,courToedit)=>async(dispatch)=>{
    dispatch({
        type:LOAD_COUR
    })

    try {
        const result = await axios.put(`/api/cour/${id}`,courToedit)
        dispatch({type:EDIT_COUR,
         payload:result.data
        })
    } catch (error) {
        dispatch({
            type:FAIL_COURS,
            payload:error.response.data
        })
    }
}

///

export const delCour=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_COUR})
    try {
        const result= await axios.delete(`/api/cour/${id}`)
        dispatch({
            type:DELETE_COUR,
            payload:result.data
        })
    } catch (error) {
        dispatch({
            type:FAIL_COURS,
            payload:error.response.data
        })
    }

}