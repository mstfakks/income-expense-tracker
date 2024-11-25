import { useRouter } from "next/navigation";
import DataTable, { Column } from "../shared/data-table";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { IncomeExpense } from "@/types/income-expense.types";
import { getStorageItem } from "@/utils/storage-util";
import { setIncomeExpense } from "@/redux/features/incomeExpenseSlice";
import MainButton from "../shared/main-button";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(isBetween);
dayjs.extend(customParseFormat)

const columns: Column[] = [
  {
    id: "type",
    headerName: "Tip",
  },
  {
    id: "description",
    headerName: "Açıklama",
  },
  {
    id: "amount",
    headerName: "Miktar",
  },
  {
    id: "categoryName",
    headerName: "Kategori",
  },
  {
    id: "date",
    headerName: "Tarih",
  },
];

const IncomeExpenseTable = () => {
  const router = useRouter();
  const incomeExpenses = useAppSelector(
    (state) => state.incomeExpense.incomeExpenseList
  );
  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState(dayjs().startOf('month').format("YYYY-MM-DD"));
  const [finishDate, setFinishDate] = useState(dayjs().endOf('month').format("YYYY-MM-DD"));
  const [filteredData, setFilteredData] = useState<IncomeExpense[]>([]);

  useEffect(() => {
    const incomesExpenses: IncomeExpense[] = getStorageItem("incomesExpenses");
    dispatch(setIncomeExpense(incomesExpenses));
    //onFilter()
  }, []);

  const handleEditClick = (id?: number) => {
    router.push(`/income-expense/${id}`);
  };

  const onFilter = () => {
    const start = dayjs(startDate).format("YYYY-MM-DD");
    const finish = dayjs(finishDate).format("YYYY-MM-DD");

    console.log("start", start);
    console.log("finish", finish);

    const filteredIncomeExpense = incomeExpenses.filter((item) => {
      console.log("item.date", item.date);
      if (item.date) {
        const date = dayjs(item.date as string, "DD/MM/YYYY", true).format("YYYY-MM-DD");
        console.log("formatDate", date);
        if (dayjs(date).isBetween(start, finish, null, "[]")) {
          return item;
        }
      }
    });
    setFilteredData(filteredIncomeExpense);
  };

  useEffect(() => {
    onFilter();
  }, [incomeExpenses])

  console.log("incomeExpense", incomeExpenses);

  

  return (
    <div className="p-4">
      <div className="flex gap-4 items-end flex-wrap">
        <div className="flex-grow sm:flex-grow-0">
          <label
            htmlFor="startDate"
            className={`block text-sm font-medium text-gray-800 mb-1`}
          >
            Başlangıç Tarihi
          </label>
          <input
            id="startDate"
            type="date"
            className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-slate-700 p-2 w-full`}
            defaultValue={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="flex-grow sm:flex-grow-0">
          <label
            htmlFor="finishDate"
            className={`block text-sm font-medium text-gray-800 mb-1`}
          >
            Bitiş Tarihi
          </label>
          <input
            id="finishDate"
            type="date"
            className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-slate-700 p-2 w-full`}
            defaultValue={finishDate}
            onChange={(e) => setFinishDate(e.target.value)}
          />
        </div>
        <MainButton
          onClick={onFilter}
          additionalClassName="text-sm px-3 hover:text-black flex-grow sm:flex-grow-0 w-full sm:w-24"
        >
          Filtrele
        </MainButton>
      </div>
      <div className="mt-3">
        <DataTable
          columns={columns}
          rows={filteredData}
          editClick={handleEditClick}
        />
      </div>
    </div>
  );
};

export default IncomeExpenseTable;
