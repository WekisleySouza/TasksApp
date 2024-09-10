import { createSlice } from "@reduxjs/toolkit";

const userStateSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        token: null
    },
    reducers: {
        setUser: (state, { payload }) => {
            return { ...state, ...payload };
        },
    }
})

export const {
    saveUserLocal,
    loadUser,
    setUser
} = userStateSlice.actions;

export default userStateSlice.reducer;