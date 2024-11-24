"use client";
import { useAppSelector } from "@/redux/store";
import { IncomeExpenseType } from "@/types/income-expense.types";
import ChartCard from "../shared/chart-card";

const IncomePieChart = () => {
  const { incomeExpenseList } = useAppSelector((state) => state.incomeExpense);
  console.log("incomeExpenseList", incomeExpenseList);
  const incomeList = incomeExpenseList.filter(
    (item) => item.type === IncomeExpenseType.INCOME
  );

  const labels = incomeList.map(
    (item) => `${item.categoryName || ""} - ${item.description}`
  );
  const incomeData = incomeList.map((item) => item.amount);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Gelirler",
        data: incomeData,
      },
    ],
  };

  return (
    <ChartCard data={data} label="Gelirler" />
  );
};

export default IncomePieChart;
