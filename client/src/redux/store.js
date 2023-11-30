
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux' ;
import { alertsSlice } from './alertsSlice';


//combineReducers function is used here to combine multiple slices into a single root reducer
const rootReducer = combineReducers({
    // All Slices 
    alerts: alertsSlice.reducer ,
})

const store = configureStore({
    reducer : rootReducer,
})

export default store ;