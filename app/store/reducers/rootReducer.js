import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import catagoriesReducer from "./catagoriesReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: catagoriesReducer,
});

export default rootReducer;
