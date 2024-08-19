import { createSlice } from "@reduxjs/toolkit";
import tasks from "../../mock/tasks";

const tasksStateSlice = createSlice({
    name: 'tasks',
    initialState: [...tasks],
    reducers: {

    }
})

export const { 
    
} = tasksStateSlice.actions;
export default tasksStateSlice.reducer;