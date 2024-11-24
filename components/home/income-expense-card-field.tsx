"use client";
import { setIncomeExpense } from "@/redux/features/incomeExpenseSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { IncomeExpense, IncomeExpenseType } from "@/types/income-expense.types";
import { getStorageItem } from "@/utils/storage-util";
import { useEffect, useMemo } from "react";
import IncomeExpenseCard from "../shared/income-expense-card";
import Image from "next/image";

const IncomeExpenseCardField = () => {
  const dispatch = useAppDispatch();
  const { incomeExpenseList } = useAppSelector((state) => state.incomeExpense);

  useEffect(() => {
    const incomesExpenses: IncomeExpense[] = getStorageItem("incomesExpenses");
    dispatch(setIncomeExpense(incomesExpenses));
  }, []);

  const prices = useMemo(() => {
    const incomeList = incomeExpenseList.filter(
      (item) => item.type === IncomeExpenseType.INCOME
    );
    const expenseList = incomeExpenseList.filter(
      (item) => item.type === IncomeExpenseType.EXPENSE
    );
    const totalIncome = incomeList.reduce(
      (prev, curr) => (prev += Number(curr.amount)),
      0
    );
    const totalExpense = expenseList.reduce(
      (prev, curr) => (prev += Number(curr.amount)),
      0
    );
    const remainAmount = (totalIncome || 0) - (totalExpense || 0);
    return { totalIncome, totalExpense, remainAmount };
  }, [incomeExpenseList]);

  return (
    <>
      <h2 className="text-3xl font-bold mb-5 mt-10">Harcama Özeti</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
        <IncomeExpenseCard
          title="Toplam Gelir"
          amount={prices.totalIncome || 0}
          additionalClass="bg-green-50"
          cardIcon={
              <Image
                src={"/income.svg"}
                alt="income-money"
                priority
                width={60}
                height={60}
              />
            }
        />

        <IncomeExpenseCard
          title="Toplam Gider"
          amount={prices.totalExpense || 0}
          additionalClass="bg-red-50"
          cardIcon={
              <Image
                src={"/expense.svg"}
                alt="expense-money"
                priority
                width={60}
                height={60}
              />
            }
        />
        <IncomeExpenseCard
          title="Kalan Para"
          amount={prices.remainAmount || 0}
          additionalClass="bg-green-50"
          cardIcon={
            <Image
              src={"/remain.svg"}
              alt="remain-money"
              priority
              width={60}
              height={60}
            />
          }
        />
      </div>
    </>
  );
};

export default IncomeExpenseCardField;
