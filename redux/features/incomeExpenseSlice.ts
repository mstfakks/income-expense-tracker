import { Category } from "@/types/category.types";
import { saveStorage } from "@/utils/storage-util";
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
        }
    }
})

export const { handleAddCategory, setCategories, handleUpdateCategory } = incomeExpenseSlice.actions
export const incomeExpenseReducer = incomeExpenseSlice.reducer;