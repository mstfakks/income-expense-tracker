"use client"
import EditIncomeExpenseForm from "@/components/income-expense/edit-income-expense-form";
import MainButton from "@/components/shared/main-button";
import { useRouter } from "next/navigation";

const EditIncomeExpense = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-4xl">Gelir Gider Düzenle</p>
        <MainButton additionalClassName="hover:shadow-xl" onClick={handleBack}>
          Geri
        </MainButton>
      </div>

      <div className="mt-7 min-h-96 bg-white rounded-2xl shadow-xl">
        <div className="py-8 px-4 max-w-2xl mx-auto">
          <EditIncomeExpenseForm />
        </div>
      </div>
    </>
  );
};

export default EditIncomeExpense;
