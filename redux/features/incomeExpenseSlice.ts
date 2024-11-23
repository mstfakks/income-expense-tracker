import { Category } from "@/types/category.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface IncomeExpense {
    categories: Category[]
}

const initialState: IncomeExpense = {
    categories: []
}

export const incomeExpenseSlice = createSlice({
    name: "incomeExpense",
    initialState,
    reducers: {
        handleAddCategory: (state, action: PayloadAction<Category>) => {
            state.categories.push(action.payload)            
        },
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload
        }
    }
})

export const { handleAddCategory, setCategories } = incomeExpenseSlice.actions
export const incomeExpenseReducer = incomeExpenseSlice.reducer;