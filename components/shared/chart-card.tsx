import PieChart from "./pie-chart";

interface ChartCardProps {
    label: string;
    data: any
}

const ChartCard = ({data, label}: ChartCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center col-span-2 md:col-span-1 min-w-0">
      <h1 className=" text-xl font-semibold uppercase py-3">{label}</h1>

      <div className="border border-gray-200 w-full p-0" />

      <div className="flex w-full h-60 sm:h-80 mt-2 pb-4 min-w-0">
        <PieChart data={data} />
      </div>
    </div>
  );
};

export default ChartCard;