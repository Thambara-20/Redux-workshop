const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/icecream/iceCreamSlice").iceCreamActions;

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered(10));
store.dispatch(cakeActions.restocked(20));

store.dispatch(iceCreamActions.ordered(5));
store.dispatch(iceCreamActions.restocked(10));

unsubscribe(); // unsubscribing from store