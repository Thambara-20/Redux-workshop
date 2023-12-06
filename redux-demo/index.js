const redux = require('redux');
const createStore= redux.createStore;
const bindActionCreaters = redux.bindActionCreators
const combineReducers = redux.combineReducers

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


// const initialState = {
//     numberOfCakes: 10,
//     numberOfIcecreams: 20,
//     };

const initialCakeState = {
    numberOfCakes: 10,
};

const initialIcecreamState = {
    numberOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
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

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type) {
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
        case CAKE_ORDERED:
            // return {
            //     ...state,
            //     numberOfCakes: state.numberOfCakes - action.quantity, //wrong
            // };
               return{
                     ...state,
                     numberOfIcecreams: state.numberOfIcecreams - action.quantity, //works but redux toolkit dont let it happen have to use EXTRA reducers mmmm
               }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
}); 

const store = createStore(rootReducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
})




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


