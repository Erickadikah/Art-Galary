import { createSlice } from  '@reduxjs/toolkit';
import { configureStore } from  '@reduxjs/toolkit';
// fuction to create a slice of the store
/// 1. name of the slice
/// 2. initial state
/// 3. reducers
const signinSlice = createSlice({
    name: 'signin',
    initialState: { isLoggedin: false },
    reducers: {
        login: (state) => {
            state.isLoggedin = true;
        },
        logout: (state) => {
            state.isLoggedin = false;
        },
    },
});

export const signinActions = signinSlice.actions;


export const store = configureStore({
    reducer: signinSlice.reducer
});

export default store;