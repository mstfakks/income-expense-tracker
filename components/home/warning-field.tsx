"use client"
import { setCategories } from "@/redux/features/incomeExpenseSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Category } from "@/types/category.types";
import { IncomeExpenseType } from "@/types/income-expense.types";
import { getStorageItem } from "@/utils/storage-util";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import WarningFieldItem from "./warning-field-item";

const WarningField = () => {
    const { incomeExpenseList, categories } = useAppSelector((state) => state.incomeExpense)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const categories: Category[] = getStorageItem("categories");
        dispatch(setCategories(categories));
    }, []);
    
    const warnData = useMemo(() => {
        const expenseList = incomeExpenseList.filter((item) => item.type === IncomeExpenseType.EXPENSE)
        return categories.map((item) => {
            const oneCategoryExpenses = expenseList.filter((expense) => Number(expense.categoryId) === item.id)
            const oneCategoryTotalExpense = oneCategoryExpenses.reduce((prev, curr) => prev += Number(curr.amount), 0)

            return {
                ...item,
                oneCategoryTotalExpense,
                warn: oneCategoryTotalExpense > item.limit * 0.8
            }
        })
    }, [incomeExpenseList, categories])

    const activeWarns = warnData.filter((item) => item.warn)
    
    return(
        <div className="mt-12 container mx-auto md:px-20">
            <div className="bg-white rounded-2xl shadow-xl">
                
                <h2 className="font-bold text-2xl p-4">Uyarılar</h2>                
                <div className="border border-gray-500 border-opacity-30" />
                
                <div className="h-80 overflow-y-auto overflow-x-hidden p-4 space-y-3">
                    
                    {(activeWarns && activeWarns.length > 0) ? activeWarns?.map((item, index) => (
                        <WarningFieldItem
                            key={index}
                            message={`${item.name} kategorisine ait harcamalar limitin %80' ine ulaşmıştır. Limit: ${item.limit} / Harcama: ${item.oneCategoryTotalExpense}`} 
                        />
                    )): (
                        <div className="flex items-center justify-center w-full h-full">
                            <h4 className="font-semibold text-sm">Bütçenizle ilgili bir uyarı bulunmamaktadır.</h4>
                        </div>
                    )}
                    
                    
                </div>            
            </div>
        </div>
    )
}

export default WarningField;