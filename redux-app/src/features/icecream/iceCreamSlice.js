const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions