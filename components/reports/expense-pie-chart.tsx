"use client"
import { useAppSelector } from "@/redux/store";
import ChartCard from "../shared/chart-card";
import { IncomeExpenseType } from "@/types/income-expense.types";

const ExpensePieChart = () => {
    const { incomeExpenseList } = useAppSelector((state) => state.incomeExpense)
    console.log('incomeExpenseList');
    
    const expenseList = incomeExpenseList.filter((item) => item.type === IncomeExpenseType.EXPENSE)

    const labels = expenseList.map((item) => `${item.categoryName || ''} - ${item.description || ''}`)
    const expenseData = expenseList.map((item) => item.amount)

    const data = {
        labels,
        datasets: [
            {
                label: 'Giderler',
                data: expenseData
            }
        ]
    }


    return(
        <ChartCard 
            data={data}
            label="Giderler" 
        />
    )
}

export default ExpensePieChart;