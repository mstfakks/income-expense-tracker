"use client"
import { useAppDispatch } from "@/redux/store"
import IncomePieChart from "./income-pie-chart"
import { useEffect } from "react"
import { IncomeExpense } from "@/types/income-expense.types"
import { getStorageItem } from "@/utils/storage-util"
import { setIncomeExpense } from "@/redux/features/incomeExpenseSlice"
import ExpensePieChart from "./expense-pie-chart"

const Charts = () => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const incomesExpenses: IncomeExpense[] = getStorageItem("incomesExpenses")
        dispatch(setIncomeExpense(incomesExpenses))
    }, [])
    
    return(
        <div className="grid grid-cols-2 gap-3">
            <IncomePieChart />
            <ExpensePieChart />
        </div>
    )
}

export default Charts;