const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const initialState = { // initial state
    name:"Rajesh",
    address: {
        city: "Bangalore",
        street: "Karnataka",
        pincode: 560037,
    },
}

const STREET_UPDATED = "STREET_UPDATED"; // action type

const streetUpdated = () => { // action creator
    return {
        type: STREET_UPDATED,
        street: "BTM 2nd Stage",
    };
}

const reducer = (state = initialState, action) => { // reducer
    switch(action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.street,
            //     },}
            
            return produce(state, (draft) => {
                draft.address.street = action.street;
            });

        default:
            return state;
    }
}

const store = createStore(reducer); // store

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State: ", store.getState());
});

store.dispatch(streetUpdated()); // dispatching action

unsubscribe(); // unsubscribing from store