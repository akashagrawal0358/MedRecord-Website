
import {createSlice} from '@reduxjs/toolkit';


// We have to create Slice and export Reducers from it 
export const patientSlice = createSlice({
    name: "patient",
    initialState : {
        patient : null,
        reloadPatient: false
    },

    // reducers functions to change patient state 
    reducers: {
        setPatient : (state, action)=>{
            state.patient = action.payload ;
        },
        reloadPatientData : (state, action)=>{
            state.reloadPatient = action.payload ;
        }

    }
});

export const{ setPatient, reloadPatientData } = patientSlice.actions ;


