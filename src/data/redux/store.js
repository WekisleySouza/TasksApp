import { configureStore } from "@reduxjs/toolkit";
import tasksStateSlice from "./tasksStateSlice";

export default configureStore({
    reducer: {
        tasksState: tasksStateSlice,
    }
})