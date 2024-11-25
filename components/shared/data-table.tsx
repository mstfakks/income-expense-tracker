export interface Column {
  id: string;
  headerName: string;
}

interface DataTableProps {
  columns: Column[];
  rows: any[];
  tableContainerClass?: string;
  editClick?: (id?: number) => void;
  removeClick?: (id?: number) => void;
}

const DataTable = ({ columns, rows, tableContainerClass, editClick, removeClick }: DataTableProps) => {
  return (
    <div
      className={`overflow-x-auto rounded-2xl ${tableContainerClass}`}
    >
      <table className="table-auto w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columns.map((item) => (
              <th key={item.id} scope="col" className="px-6 py-3">
                {item.headerName}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((item) => {
            return (
              <tr
                key={item?.id}
                className="odd:bg-white even:bg-gray-50 border-b hover:bg-gray-100"
              >
                {columns?.map((col) => (
                  <td key={col.id} className="px-6 py-4">
                    {item[col.id]}
                  </td>
                ))}
                <td className="px-6 py-4 flex items-center">
                  {editClick && <a onClick={() => editClick(item?.id)} className="font-medium text-blue-600 hover:underline hover:cursor-pointer">Düzenle</a>}
                  {removeClick && <a onClick={() => removeClick(item?.id)} className="font-medium text-red-600 hover:underline ms-3 hover:cursor-pointer">Sil</a>}
                </td>               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
