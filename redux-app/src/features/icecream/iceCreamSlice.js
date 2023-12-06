import { createSlice } from "@reduxjs/toolkit";

const initialState = { // initial state
    numOfIceCreams: 200,
}

const iceCreamSlice = createSlice({ // no need a action creator, action object, and a reducer function
    name: "iceCream",
    initialState: initialState,
    reducers: {
        ordered: (state, action) => { // reducer function 1
            state.numOfIceCreams -= action.payload;
        },
        restocked: (state, action) => { // reducer function 2
            state.numOfIceCreams += action.payload;
        },
    }
})

export default iceCreamSlice.reducer

export const{ ordered, restocked } =iceCreamSlice.actions