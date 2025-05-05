import axios from "axios"
import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER } from "../actionTypes/userActionTypes"

///
export const getUser = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
  
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const result = await axios.get("/api/user/allUsers", config);
      console.log("Response data:", result.data);
  
     // console.log( result.data); // Check actual structure
  
      dispatch({
        type: GET_ALL_USERS,
        payload: result.data.listUsers 
      });

            //console.log(result)

    } catch (error) {
      dispatch({
        type: FAIL_USER,
        payload:
          error.response.data.errors ,
      });
    }
  };
  
  
///
export const getOneUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    const result = await axios.get(`/api/user/${id}`, config);
    
    // Access userToGet from the correct path
    dispatch({
      type: GET_USER,
      payload: result.data.userToGet, // updated based on the log
    });

    //console.log("Axios result:", result); // Keep logging to inspect the response

  } catch (error) {
    //console.error("Error during API call:", error);
    dispatch({
      type: FAIL_USER,
      payload: error.response && error.response.data.errors ? error.response.data.errors : "Unknown error",
    });
  }
};


///
export const deleteUser=(id)=>async(dispatch)=>{
  dispatch({ type: LOAD_USER });

  try {
      const config = {
          headers: {
              authorization: localStorage.getItem("token")
          }
      }
      const result = await axios.delete(`/api/user/${id}`, config);
      dispatch({
          type: DELETE_USER,
          payload: result.data.UserToDelete.id 
      });
      console.log(result.data.UserToDelete);
  } catch (error) {
      dispatch({
          type: FAIL_USER,
          payload: error.response.data.errors
      });
  }
}

