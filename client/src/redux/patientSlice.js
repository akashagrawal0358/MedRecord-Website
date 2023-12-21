
import {createSlice} from '@reduxjs/toolkit';


// We have to create Slice and export Reducers from it 
export const patientSlice = createSlice({
    name: "patient",
    initialState : {
        patient : null,
    },

    // reducers functions to change patient state 
    reducers: {
        setPatient : (state, action)=>{
            state.patient = action.payload ;
        }
    }
});

export const{ setPatient } = patientSlice.actions ;


