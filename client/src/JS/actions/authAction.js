//import :

import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from "../actionTypes/authActionTypes"
import axios from 'axios'





// functions : 
// register : 

export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
      const result = await axios.post("/api/auth/register", newUser);
  
      // ✅ Save token to localStorage
      localStorage.setItem("token", result.data.token);
  
      dispatch({ type: SUCCESS_AUTH, payload: result.data });
      navigate("/profile");
    } catch (error) {
      dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
    }
  };
  

//login : 

export const login = (user, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
      const result = await axios.post("/api/auth/login", user);
  
      // ✅ Save token to localStorage
      localStorage.setItem("token", result.data.token);
  
      dispatch({ type: SUCCESS_AUTH, payload: result.data });
      navigate("/profile");
    } catch (error) {
      dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
    }
  };
  

//current : 
export const current = ()=>async(dispatch)=>{
    dispatch({type:LOAD_AUTH})
    try {
        let config = {
            headers:{
                authorization:localStorage.getItem("token")
            }
        }

        const result = await axios.get("/api/auth/current",config)
        dispatch({type:CURRENT_AUTH,payload:result.data})
    } catch (error) {
         dispatch({type:FAIL_AUTH,payload:error.response.data.errors})
        
    }
}

//logout :

export const logout= (navigate)=> (dispatch) =>{
    dispatch({ type:LOGOUT_AUTH})
    navigate('/')
}

