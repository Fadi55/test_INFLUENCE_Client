import {
 
  GET_INFLUENCERS_REQUEST,
  GET_INFLUENCERS_SUCCESS,
  GET_INFLUENCERS_FAILURE,
 
} from "./../actionTypes/influencer";
import { api_url } from "../config";
import axios from "axios";


 

export function getInfluencers() {
  return (dispatch) => {
    dispatch({ type: GET_INFLUENCERS_REQUEST });
       axios.get(`${api_url}/getAllInfluencers`)
      .then(function (res) {
        console.log("res =>", res.data);
        dispatch({
          type: GET_INFLUENCERS_SUCCESS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        const { response } = error;
        console.log("err", response);
        if (response !== undefined) {
          dispatch({
            type: GET_INFLUENCERS_FAILURE,
            payload: response?.data,
          });
        }
      });
  };
}

 