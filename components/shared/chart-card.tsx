import PieChart from "./pie-chart";

interface ChartCardProps {
    label: string;
    data: any
}

const ChartCard = ({data, label}: ChartCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center">
      <h1 className=" text-xl font-semibold uppercase py-3">{label}</h1>

      <div className="border border-gray-200 w-full p-0" />

      <div className="w-[70%] pt-0 h-fit mt-2 pb-4">
        <PieChart data={data} />
      </div>
    </div>
  );
};

export default ChartCard;