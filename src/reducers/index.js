import { combineReducers } from "redux";
import { influencers } from "./influencer";
import { brands } from "./brand";
import { domainbrands } from "./domainBrand";
export default combineReducers({
  influencers,
  brands,
  domainbrands,
});
