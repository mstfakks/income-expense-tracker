import { useAppSelector } from "@/redux/store";
import DataTable, { Column } from "../shared/data-table";

const columns: Column[] = [
  {
    id: "name",
    headerName: "İsim",
  },
  {
    id: "description",
    headerName: "Açıklama",
  },
  {
    id: "limit",
    headerName: "Harcama Limiti",
  },
];

const CategoryTable = () => {
    const categories = useAppSelector((state) => state.incomeExpense.categories)

    return <DataTable columns={columns} rows={categories} />;
};

export default CategoryTable;
