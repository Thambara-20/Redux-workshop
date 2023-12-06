const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = { // initial state
    loading: false,
    users: [],
    error: "",
}

const fetchUsers = createAsyncThunk("user/fetchUsers", () => {

    return axios.get("https://jsonplaceholder.typicode.com/users").
        then((response) => response.data.map((e) => e.id))
}
)

const userSlice = createSlice({ // no need a action creator, action object, and a reducer function
    name: "user",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers

