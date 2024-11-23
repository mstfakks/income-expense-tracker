import { useRouter } from "next/navigation";
import DataTable, { Column } from "../shared/data-table"
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { IncomeExpense } from "@/types/income-expense.types";
import { getStorageItem } from "@/utils/storage-util";
import { setIncomeExpense } from "@/redux/features/incomeExpenseSlice";

const columns: Column[] = [
    {
      id: "type",
      headerName: "Tip",
    },
    {
      id: "description",
      headerName: "Açıklama",
    },
    {
      id: "amount",
      headerName: "Miktar",
    },
    {
        id: "categoryName",
        headerName: "Kategori",
    },
    {
        id: "date",
        headerName: "Tarih",
    },
];

const IncomeExpenseTable = () => {
    const router = useRouter();
    const incomeExpenses = useAppSelector((state) => state.incomeExpense.incomeExpenseList)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const incomesExpenses: IncomeExpense[] = getStorageItem("incomesExpenses")
        dispatch(setIncomeExpense(incomesExpenses))
    }, [])

    const handleEditClick = (id?:number) => {
        router.push(`/income-expense/${id}`)
    }

    return(
        <DataTable
            columns={columns}
            rows={incomeExpenses}
            editClick={handleEditClick}
        />
    )
}

export default IncomeExpenseTable;