import IncomeExpenseCardField from "@/components/home/income-expense-card-field";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl">Ana Sayfa</h2>        
      </div>

      <div className="mt-7">
        <IncomeExpenseCardField />
      </div>
    </>
  );
}
