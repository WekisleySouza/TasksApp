import { createSlice } from "@reduxjs/toolkit";
import { storeUserAsync } from "../data/asyncStorageFunctions";

const userStateSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        logged: false
    },
    reducers: {
        saveUser: (state, { payload }) => {
            storeUserAsync(payload)
            return { ...state, ...payload }
        },
        loadUser: (state) => {

        },
        setUser: (state, { payload }) => {

        }
    },
})

export const {
    saveUser,
    loadUser,
    setUser
} = userStateSlice.actions;

export default userStateSlice.reducer;