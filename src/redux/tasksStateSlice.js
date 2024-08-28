import { createSlice } from "@reduxjs/toolkit";
import Task from "../models/Task";

const tasksStateSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, {payload, type}) => {
            return [ ...state, payload ]
        },
    }
})

export const { 
    addTask,
} = tasksStateSlice.actions;
export default tasksStateSlice.reducer;