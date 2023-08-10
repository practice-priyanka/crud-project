import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Employees/employeeSlice";
export const store = configureStore({
    reducer: {
        employees: employeeReducer
    },
})