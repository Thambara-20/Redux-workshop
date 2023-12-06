const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/icecream/iceCreamSlice").iceCreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State: ", store.getState());
}); //logger middleware will log the state changes

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered(10));
// store.dispatch(cakeActions.restocked(20));

// store.dispatch(iceCreamActions.ordered(5));
// store.dispatch(iceCreamActions.ordered(5));
// store.dispatch(iceCreamActions.ordered(5));
// store.dispatch(iceCreamActions.restocked(10));

// unsubscribe(); // unsubscribing from store