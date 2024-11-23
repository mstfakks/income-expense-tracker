"use client"
import IncomeExpenseTable from "@/components/income-expense/income-expense-table";
import MainButton from "@/components/shared/main-button";
import { useRouter } from "next/navigation";

const IncomeExpensePage = () => {
    const router = useRouter()

    const handleAdd = () => {
        router.push('/income-expense/0')
    }

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-4xl">Gelir Gider</p>
        <MainButton additionalClassName="hover:shadow-xl" onClick={handleAdd}>
          Ekle
        </MainButton>
      </div>

      <div className="mt-7 min-h-96 bg-white rounded-2xl shadow-xl">
        <IncomeExpenseTable />
      </div>
    </>
  );
};

export default IncomeExpensePage;
