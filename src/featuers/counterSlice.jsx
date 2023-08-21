import { createSlice } from "@reduxjs/toolkit";

// המידע שיש בסטייט ההתחלתי של הסלייס קאונטר שהוא יהיה
// בסופו של דבר חלק מהסטור הגלובלי
const initValue = {
    counter: 77
}

const counterSlice = createSlice({
    name:"counter",
    initialState: initValue,
    reducers:{
        add1:(state,action) =>{
            state.counter++;
        },
        addCustom:(state,action) =>{
            state.counter += action.payload.number;
        },
        reset0:(state,action) =>{
            state.counter = 0;
        },
        reduce1:(state,action)=>{
            state.counter--;
        }
        // כל האקשנים והפונקציות
    }
})

export const {add1, addCustom, reset0,reduce1}= counterSlice.actions;
export default counterSlice.reducer;