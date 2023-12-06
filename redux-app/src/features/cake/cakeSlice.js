const { iceCreamActions } = require("../icecream/iceCreamSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = { // initial state
    numOfTickets: 100,
}

const cakeSlice = createSlice({ // no need a action creator, action object, and a reducer function
    name: "cake",
    initialState: initialState,
    reducers: {
        ordered: (state, action) => { // reducer function 1
            state.numOfTickets -= action.payload;
        },
        restocked: (state, action) => { // reducer function 2
            state.numOfTickets += action.payload;
        },
    },
    extraReducers: (builder)=> {
        builder.addCase(iceCreamActions.ordered, (state, action) => {
            state.numOfTickets -= action.payload;
        })
    
    }

})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions