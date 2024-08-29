import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTasksAsync, storeTasksAsync } from "../data/asyncStorageFunctions";
import Task from "../models/Task";

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
        removeTask: (state, { payload }) => {
            const newTasks = state.filter(task => {
                const selectedTask = new Task()
                const currentTask = new Task()
                selectedTask.taskObject = payload
                currentTask.taskObject = task
                return selectedTask.isEqualsTo(currentTask)
            })
            return newTasks
        },
        updateTask: (state, { payload }) => {
            const newTasks = state.filter(task => {
                const selectedTask = new Task()
                const currentTask = new Task()
                selectedTask.taskObject = payload
                currentTask.taskObject = task
                return selectedTask.isEqualsTo(currentTask) ? payload : task
            })
            return newTasks
        },
        toggleTask: (state, { payload }) => {

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
    saveTasks,
    addTask,
    removeTask,
    updateTask,
    toggleTask
} = tasksStateSlice.actions;

export default tasksStateSlice.reducer;