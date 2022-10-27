import {
 
    GET_BRANDS_REQUEST,
    GET_BRANDS_SUCCESS,
    GET_BRANDS_FAILURE,
 
   
  } from "./../actionTypes/brands";
  import { api_url } from "../config";
  import axios from "axios";
  
  
   
  
  export function getbrands() {
    return (dispatch) => {
      dispatch({ type: GET_BRANDS_REQUEST });
         axios.get(`${api_url}/getAllInbrands`)
        .then(function (res) {
          console.log("res =>", res.data);
          dispatch({
            type: GET_BRANDS_SUCCESS,
            payload: res.data,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: GET_BRANDS_FAILURE,
              payload: response?.data,
            });
          }
        });
    };
  }
  
 