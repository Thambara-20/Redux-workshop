import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType={
    numOfCakes: number

}

const initialState : initialStateType= { // initial state
    numOfCakes: 100,
}

const cakeSlice = createSlice({ // no need a action creator, action object, and a reducer function
    name: "cake",
    initialState: initialState,
    reducers: {
        ordered: (state, action: PayloadAction<number>) => { // reducer function 1
            state.numOfCakes -= action.payload;
        },
        restocked: (state, action: PayloadAction<number>) => { // reducer function 2
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