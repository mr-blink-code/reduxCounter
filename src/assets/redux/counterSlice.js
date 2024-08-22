import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name : 'counterApp', //name has no importance
    initialState : {
        value:0 //initial state
    },
    reducers:{
// logic to update the value
// actons are created inside the reducers
        increment:(state,data)=>{
            state.value+=data.payload
        },
        decrement:(state,data)=>{
            state.value-=data.payload

        },
        reset:(state)=>{
            state.value=0;
        }
    }
});
 export const {increment,decrement,reset}=counterSlice.actions;
 export default counterSlice.reducer;