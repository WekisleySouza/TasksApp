import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserAsync, storeUserAsync } from "../data/asyncStorageFunctions";


const signin = createAsyncThunk(
    'tasks/signin',
    async () => {
        const user = getUserAsync
    }
)

const userStateSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Wekisley',
        email: '',
        password: ''
    },
    reducers: {
        signup: (state, { payload }) => {
            console.log('Login: ', payload)
            storeUserAsync(payload)
            return { ...state, ...payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, { payload }) => {
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