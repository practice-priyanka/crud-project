import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees:  [],
    updateEmploye:[]
}

const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee: (state, {payload}) => {
            state.employees = payload;
        },
       

        }
    
});

export const { addEmployee, updateEmp} = employeeSlice.actions;
export const getAllEmployees = (state) => state.employees.employees;

export default employeeSlice.reducer;