const redux = require('redux');
const createStore= redux.createStore;
const bindActionCreaters = redux.bindActionCreators


const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTAKE = 'CAKE_RESTAKE';

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const restakeCake = () => {
    return {
        type: CAKE_RESTAKE,
        quantity: 5,
    };
}

const initialState = {
    numberOfCakes: 10,
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
}, store.dispatch);

actions.orderCake();
actions.orderCake();

actions.restakeCake();

unsubscribe();


