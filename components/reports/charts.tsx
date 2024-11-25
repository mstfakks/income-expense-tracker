"use client"
import { useAppDispatch } from "@/redux/store"
import IncomePieChart from "./income-pie-chart"
import { useEffect } from "react"
import { IncomeExpense } from "@/types/income-expense.types"
import { getStorageItem } from "@/utils/storage-util"
import { setCategories, setIncomeExpense } from "@/redux/features/incomeExpenseSlice"
import ExpensePieChart from "./expense-pie-chart"
import ExpenseByCategoryChart from "./expense-by-category-chart"
import { Category } from "@/types/category.types"

const Charts = () => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const incomesExpenses: IncomeExpense[] = getStorageItem("incomesExpenses")
        dispatch(setIncomeExpense(incomesExpenses))
        const categories: Category[] = getStorageItem("categories");
        dispatch(setCategories(categories));
    }, [])
    
    return(
        <div className="grid grid-cols-2 gap-4">
            <IncomePieChart />
            <ExpensePieChart />
            <ExpenseByCategoryChart />
        </div>
    )
}

export default Charts;