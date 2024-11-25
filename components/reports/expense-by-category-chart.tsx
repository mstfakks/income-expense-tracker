import { useAppSelector } from "@/redux/store"
import { Category } from "@/types/category.types"
import { IncomeExpenseType } from "@/types/income-expense.types"
import { useMemo } from "react"
import ChartCard from "../shared/chart-card"

const ExpenseByCategoryChart = () => {
    const { incomeExpenseList, categories } = useAppSelector((state) => state.incomeExpense)
    
    
    const totalExpenseByCategory = useMemo(() => {
        const expenseList = incomeExpenseList.filter((item) => item.type === IncomeExpenseType.EXPENSE)
        const categoryExpenses: Category[] = []

        categories.forEach((item) => {
            const oneCategoryExpenses = expenseList.filter((expense) => Number(expense.categoryId) === item.id)
            const categoryTotalExpense = oneCategoryExpenses.reduce((prev, curr) => prev += Number(curr.amount), 0)
            if(categoryTotalExpense > 0){
                categoryExpenses.push({
                    ...item,
                    categoryTotalExpense,
                })
            } 
        })
        
        return categoryExpenses
    }, [incomeExpenseList, categories])

    const labels = totalExpenseByCategory.map((item) => item.name)
    const expenseData = totalExpenseByCategory.map((item) => item.categoryTotalExpense)

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
            label="Kategori Bazlı Giderler"
            data={data}
        />
    )
}

export default ExpenseByCategoryChart