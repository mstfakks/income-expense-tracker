
export interface Column {
    id: string;
    headerName: string,
}

interface DataTableProps {
    columns: Column[];
    rows: any[];
    tableContainerClass?: string
}


const DataTable = ({ columns, rows, tableContainerClass }: DataTableProps) => {
    console.log('rows', rows);
    
  return (
    <div className={`relative overflow-x-auto rounded-2xl ${tableContainerClass}`}>
      <table className="table-auto w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columns.map((item) => (
                <th key={item.id} scope="col" className="px-6 py-3">
                    {item.headerName}
              </th>
            ))}
                        
          </tr>
        </thead>
        <tbody>
            {rows?.map((item, index) => {
                console.log('item', item);
                
                return(         
                <tr key={item?.id} className="odd:bg-white even:bg-gray-50 border-b hover:bg-gray-100">
                    {
                        columns?.map((col) => (
                            <td key={col.id} className="px-6 py-4">{item[col.id]}</td>
                        ))
                    }
                    {/* <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {item[columns[index]['id']]}
                    </th>
                    <td className="px-6 py-4">Faturalar</td>
                    <td className="px-6 py-4">1000</td> */}
                </tr>
            )}
            )}
          
        </tbody>
      </table>
    </div>
  );
};

export default DataTable
