import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserAsync, storeUserAsync } from "../data/asyncStorageFunctions";

const signin = createAsyncThunk(
    'tasks/signin',
    async (payload) => {
        const user = getUserAsync()
        const { email, password } = payload
        return user || {}
    }
)

const localAutentication = createAsyncThunk(
    'tasks/localAutentication',
    async () => {
        const user = getUserAsync()
        return user || {}
    }
)

const userStateSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        signup: (state, { payload }) => {
            storeUserAsync({ ...payload, isLogged: true })
            return { ...state, ...payload }
        },
        saveUser: (state, { payload }) => {
            storeUserAsync(payload)
            return state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, { payload }) => {
            return payload
        })
        builder.addCase(localAutentication.fulfilled, (state, { payload }) => {
            console.log('Auth: ', { ...state, ...payload })
            return { ...state, ...payload }
        })
    }
})

export {
    signin,
    localAutentication
}

export const { 
    signup,
} = userStateSlice.actions;

export default userStateSlice.reducer;