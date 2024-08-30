import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserAsync, storeUserAsync } from "../data/asyncStorageFunctions";

const signin = createAsyncThunk(
    'tasks/signin',
    async (payload) => {
        // const user = getUserAsync()
        // return user || {}
    }
)

const getUser = createAsyncThunk(
    'tasks/getUser',
    async (payload) => {
        const user = getUserAsync()
        return user || {}
    }
)

const userStateSlice = createSlice({
    name: 'user',
    initialState: {
        isLogged: false,
        name: 'Wekisley',
        email: '',
        password: ''
    },
    reducers: {
        signup: (state, { payload }) => {
            console.log('Login: ', payload)
            // storeUserAsync(payload)
            // return { ...state, ...payload }
        },
        saveUser: (state, { payload }) => {
            storeUserAsync(payload)
            return state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, { payload }) => {
            return payload
        })
        builder.addCase(getUser.fulfilled, (state, { payload }) => {
            return payload
        })
    }
})

export {
    signin,
}

export const { 
    signup,
} = userStateSlice.actions;

export default userStateSlice.reducer;