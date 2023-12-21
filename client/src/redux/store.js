
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux' ;
import { alertsSlice } from './alertsSlice';
import { patientSlice } from './patientSlice';


// combineReducers function is used here to combine multiple slices into a single root reducer
const rootReducer = combineReducers({
    // All Slices 
    alerts: alertsSlice.reducer ,
    patient : patientSlice.reducer,
})

const store = configureStore({
    reducer : rootReducer,
})

export default store ;