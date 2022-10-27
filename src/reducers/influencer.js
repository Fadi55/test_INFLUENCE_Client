import {
 
  GET_INFLUENCERS_REQUEST,
  GET_INFLUENCERS_SUCCESS,
  GET_INFLUENCERS_FAILURE,
 
} from "../actionTypes/influencer";
const initialState = {
  loading: true,
  item: "",
  items: [],
  error: "",
};
export function influencers(state = initialState, action) {
  console.log("action",action)
  console.log("statestate",state)
  switch (action.type) {
    
    case GET_INFLUENCERS_REQUEST:
      return {
        ...state,
        
      };
    case GET_INFLUENCERS_SUCCESS:
    
      return {
        ...state,
        items: action.payload?.response,

      };
    case GET_INFLUENCERS_FAILURE:
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
