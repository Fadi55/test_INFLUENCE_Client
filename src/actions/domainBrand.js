import {
 
 

    GET_BRANDS_BYID_REQUEST,
    GET_BRANDS_BYID_FAILURE,
    GET_BRANDS_BYID_SUCCESS,

   
  } from "./../actionTypes/domainBrand";
  import { api_url } from "../config";
  import axios from "axios";
  
  
   
  
  export function getDomainbrands(offerId) {
    return  (dispatch) => {
      dispatch({ type: GET_BRANDS_BYID_REQUEST });
         axios.get(`${api_url}/domain/brand/${offerId}`)
        .then(function (res) {
          console.log("ssssres =>", res.data);
          dispatch({
            type: GET_BRANDS_BYID_SUCCESS,
            payload: res.data,
          });
        })
        .catch(function (error) {
          const { response } = error;
          console.log("err", response);
          if (response !== undefined) {
            dispatch({
              type: GET_BRANDS_BYID_FAILURE,
              payload: response?.data,
            });
          }
        });
    };
  }

 