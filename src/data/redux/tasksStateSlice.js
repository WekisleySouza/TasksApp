import { createSlice } from "@reduxjs/toolkit";
import tasks from "../../mock/tasks";

const tasksStateSlice = createSlice({
    name: 'tasks',
    initialState: [...tasks],
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