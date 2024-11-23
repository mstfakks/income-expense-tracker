import { useAppDispatch, useAppSelector } from "@/redux/store";
import DataTable, { Column } from "../shared/data-table";
import { useEffect } from "react";
import { getStorageItem, saveStorage } from "@/utils/storage-util";
import { setCategories } from "@/redux/features/incomeExpenseSlice";
import { Category } from "@/types/category.types";

const columns: Column[] = [
  {
    id: "name",
    headerName: "İsim",
  },
  {
    id: "description",
    headerName: "Açıklama",
  },
  {
    id: "limit",
    headerName: "Harcama Limiti",
  },
];

const CategoryTable = () => {
    const categories = useAppSelector((state) => state.incomeExpense.categories)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const categories: Category[] = getStorageItem("categories")
        dispatch(setCategories(categories))
    }, [])

    return <DataTable columns={columns} rows={categories} />;
};

export default CategoryTable;
