import {
 
 
    GET_BRANDS_BYID_REQUEST,
    GET_BRANDS_BYID_FAILURE,
    GET_BRANDS_BYID_SUCCESS,

   
  } from "../actionTypes/domainBrand";
  const initialState = {
    loading: true,
    item: "",
    items: [],
    error: "",
  };
  export function domainbrands(state = initialState, action) {
    console.log("action",action)
    console.log("statestate",state)
    switch (action.type) {
      
      case GET_BRANDS_BYID_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_BRANDS_BYID_SUCCESS:
        return {
          ...state,
          item: action.payload?.response,
          loading: false,
        };
      case GET_BRANDS_BYID_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
  
  
      default:
        console.log("initialState",initialState)
        console.log("state",state)
  
        return state;
    }
  }
  