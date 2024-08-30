import { configureStore } from "@reduxjs/toolkit";
import tasksStateSlice from "./tasksStateSlice";
import userStateSlice from "./userStateSlice";

export default configureStore({
    reducer: {
        tasksState: tasksStateSlice,
        userState: userStateSlice,
    }
})