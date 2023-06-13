import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budget: 0,
    income: 0,
    expense: 0,
    expenses: [
        // {
        //     id: 1,
        //     name: 'Internet Payment',
        //     cost: 46000
        // },
        // {
        //     id: 2,
        //     name: 'Electricity Bill',
        //     cost: 60000
        // },
    ] 
}

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense(state, action) {
            let type = action.payload.type;
            let newCost = action.payload.cost;
            if(type == "income") {
                newCost = +newCost;
                state.budget = state.budget + newCost;
                state.income = state.income + newCost;
            } else if(type == "expense") {
                newCost = +newCost;
                state.budget = state.budget - newCost;
                state.expense = state.expense - newCost;
            }
            state.expenses = [action.payload, ...state.expenses];
        },
        removeItem(state, action) {
            const id = action.payload;
            const updateExpenses = state.expenses.filter((exp) => exp.id !== id);
            const currentExpenseIndex = state.expenses.findIndex((exp) => exp.id == id); 
            const currentCost = +state.expenses[currentExpenseIndex].cost;
            const currentType = state.expenses[currentExpenseIndex].type;
            if(currentType == "income") {
                state.budget = state.budget - currentCost;
                state.income = state.income - currentCost;
            } else if(currentType == "expense") {
                state.budget = state.budget + currentCost;
                state.expense = state.expense + currentCost;
            }
            state.expenses = updateExpenses;
        }
    }
})

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;