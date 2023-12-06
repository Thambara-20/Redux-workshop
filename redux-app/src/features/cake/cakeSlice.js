import { ordered as orderedIceCream } from "../icecream/iceCreamSlice"
import { createSlice } from "@reduxjs/toolkit";

const initialState = { // initial state
    numOfCakes: 100,
}

const cakeSlice = createSlice({ // no need a action creator, action object, and a reducer function
    name: "cake",
    initialState: initialState,
    reducers: {
        ordered: (state, action) => { // reducer function 1
            state.numOfCakes -= action.payload;
        },
        restocked: (state, action) => { // reducer function 2
            state.numOfCakes += action.payload;
        },
    },
    // extraReducers: (builder)=> {
    //     builder.addCase(orderedIceCream, (state, action) => {
    //         state.numOfCakes -= action.payload;
    //     })
    
    // }

})

export default cakeSlice.reducer
export const{ ordered, restocked } = cakeSlice.actions