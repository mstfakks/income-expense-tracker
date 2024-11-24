import Charts from "@/components/reports/charts";

const ReportsPage = () => {

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl">Raporlar</h2>        
      </div>

      <div className="mt-7">
        <Charts />
      </div>
    </>
  );
};

export default ReportsPage;
