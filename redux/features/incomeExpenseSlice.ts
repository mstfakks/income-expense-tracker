import { Category } from "@/types/category.types";
import { IncomeExpense } from "@/types/income-expense.types";
import { saveStorage } from "@/utils/storage-util";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface IncomeExpenseSlice {
    categories: Category[],
    incomeExpenseList: IncomeExpense[]
}

const initialState: IncomeExpenseSlice = {
    categories: [],
    incomeExpenseList: []
}

export const incomeExpenseSlice = createSlice({
    name: "incomeExpense",
    initialState,
    reducers: {
        handleAddCategory: (state, action: PayloadAction<Category[]>) => {
            state.categories = [...state.categories, ...action.payload]
            saveStorage("categories", state.categories)          
        },
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload
        },
        handleUpdateCategory: (state, action: PayloadAction<Category>) => {
            const updatedCategories = state.categories.map((item) => {
                if(item.id === action.payload.id){
                    return {
                        ...action.payload
                    }
                }
                return item
            })
                        
            state.categories = updatedCategories
            saveStorage("categories", state.categories)
        },
        
        
        handleAddIncomeExpense: (state, action: PayloadAction<IncomeExpense[]>) => {
            state.incomeExpenseList = [...state.incomeExpenseList, ...action.payload]
            saveStorage("incomesExpenses", state.incomeExpenseList)          
        },
        setIncomeExpense: (state, action: PayloadAction<IncomeExpense[]>) => {
            state.incomeExpenseList = action.payload
        },
        handleUpdateIncomeExpense: (state, action: PayloadAction<IncomeExpense>) => {
            const updatedIncomeExpense = state.incomeExpenseList.map((item) => {
                if(item.id === action.payload.id) {
                    return {
                        ...action.payload
                    }
                }
                return item
            })
            state.incomeExpenseList = updatedIncomeExpense
            saveStorage("incomesExpenses", state.incomeExpenseList)
        },
        handleDeleteIncomeExpense: (state, action:PayloadAction<number>) => {
            const filteredIncomeExpense = state.incomeExpenseList.filter((item) => item.id !== action.payload)
            state.incomeExpenseList = filteredIncomeExpense
            saveStorage("incomesExpenses", state.incomeExpenseList)
        }

    }
})

export const { 
    handleAddCategory, 
    setCategories, 
    handleUpdateCategory,
    handleAddIncomeExpense,
    setIncomeExpense,
    handleUpdateIncomeExpense,
    handleDeleteIncomeExpense 
} = incomeExpenseSlice.actions

export const incomeExpenseReducer = incomeExpenseSlice.reducer;