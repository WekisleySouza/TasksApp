import { configureStore } from "@reduxjs/toolkit";
import userStateSlice from "./userStateSlice";

export default configureStore({
    reducer: {
        userState: userStateSlice,
    }
})