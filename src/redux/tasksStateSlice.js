import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTasksAsync, storeTasksAsync } from "../data/asyncStorageFunctions";

const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        const tasks = await getTasksAsync()
        return tasks || []
    }
)

const tasksStateSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        saveTasks: (state) => {
            storeTasksAsync(state)
        },
        addTask: (state, { payload }) => {
            storeTasksAsync([payload])
            return [ ...state, payload ]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (_, { payload }) => {
                return payload
            })
    }
})

export {
    fetchTasks,
}

export const { 
    addTask,
} = tasksStateSlice.actions;

export default tasksStateSlice.reducer;