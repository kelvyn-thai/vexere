import { combineReducers } from "redux";
import citiesReducer from "../features/ListCity/module/reducer";

export default combineReducers({
    cities: citiesReducer,
})