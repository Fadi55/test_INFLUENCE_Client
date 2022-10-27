import {
 
 
    GET_BRANDS_REQUEST,
    GET_BRANDS_SUCCESS,
    GET_BRANDS_FAILURE,
   
  } from "../actionTypes/brands";
  const initialState = {
    loading: true,
    item: "",
    items: [],
    error: "",
  };
  export function brands(state = initialState, action) {
    console.log("action",action)
    console.log("statestate",state)
    switch (action.type) {
      
      case GET_BRANDS_REQUEST:
        return {
          ...state,
          
        };
      case GET_BRANDS_SUCCESS:
      
        return {
          ...state,
          items: action.payload?.response,
  
        };
      case GET_BRANDS_FAILURE:
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
  