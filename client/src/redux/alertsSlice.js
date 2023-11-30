
import {createSlice} from '@reduxjs/toolkit';


// We have to create Slice and export Reducers from it 
export const alertsSlice = createSlice({
    name: "alerts",
    initialState : {
        loading : false
    },

    // reducers functions to change loading state 
    reducers: {
        showLoading : (state)=>{
            state.loading = true ;
        },
        hideLoading : (state)=>{
            state.loading = false ;
        }
    }
});

/*
 createSlice function automatically creates action creators for each 
 reducer function defined in the reducers object.

 Now We can dispatch actions like showLoading() and hideLoading() to 
 update the Redux store's "alerts" slice state.
*/
export const{ showLoading , hideLoading } = alertsSlice.actions ;
