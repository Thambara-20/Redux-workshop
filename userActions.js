const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleware = require("redux-thunk").default; // for async actions
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");

const initialState = {
    loading: false,
    users: [],
    error: "",

}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    };
}

const fetchUsersSucceeded = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        users: users,
    };
}

const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        error: error,
    };
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.users,
            };

        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequested());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSucceeded(users));
            })
            .catch((error) => {
                dispatch(fetchUsersFailed(error.message));
            });
    };
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchUsers());
