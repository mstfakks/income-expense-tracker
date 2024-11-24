
interface IncomeExpenseCardProps {
  title: string;
  amount: number;
  additionalClass?: string
  cardIcon: JSX.Element
}

const IncomeExpenseCard = ({ title, amount, additionalClass, cardIcon }: IncomeExpenseCardProps) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-lg">
      {cardIcon && <div className={`p-3 mr-4 bg-blue-100 rounded-full ${additionalClass}`}>
        {/* <Image
            src={"/remain.svg"}
            alt="remain-money"
            priority            
            width={60}
            height={60}
        /> */}
        {cardIcon}
      </div>}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-700">₺{amount || 0}</p>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
