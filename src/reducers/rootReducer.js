import {combineReducers} from 'redux';
import { fetchDataReducer } from "./fetchDataReducer";
import { getLaunchReducer } from "./getLaunchReducer";



const rootReducer = combineReducers({
	fetchDataReducer,
	getLaunchReducer
});

export default rootReducer;