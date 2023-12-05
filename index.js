const redux = require('redux');
const createStore= redux.createStore;
const bindActionCreaters = redux.bindActionCreators


const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTAKE = 'CAKE_RESTAKE';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTAKE = 'ICECREAM_RESTAKE';

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const restakeCake = (quantity=5) => {
    return {
        type: CAKE_RESTAKE,
        quantity: quantity,
    };
}

//----------------------------

const orderIcecream = () => {
    return {
      type: ICECREAM_ORDERED,
      quantity: 1,
    };
  }

const restakeIcecream = () => {
    return {
        type: ICECREAM_RESTAKE,
        quantity: 5,
    };
}  


const initialState = {
    numberOfCakes: 10,
    numberOfIcecreams: 20,
    };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
        return {
            ...state,
            numberOfCakes: state.numberOfCakes - action.quantity,  
        };
        case CAKE_RESTAKE:
        return {
            ...state,
            numberOfCakes: state.numberOfCakes + action.quantity,
        };
        case ICECREAM_ORDERED:
        return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - action.quantity,
        };
        case ICECREAM_RESTAKE:
        return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams + action.quantity,
        };

        default:
        return state;
    }
}

const store = createStore(reducer);

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));



const actions = bindActionCreaters({
    orderCake,
    restakeCake,

    orderIcecream,
    restakeIcecream,
}, store.dispatch);

actions.orderCake();
actions.orderCake();

actions.orderIcecream();
actions.orderIcecream();

actions.restakeCake(1);

unsubscribe();


