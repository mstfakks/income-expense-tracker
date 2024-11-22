"use client"
import MainButton from "@/components/shared/main-button";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

const CategoriesPage = () => {
    const router = useRouter()
    const categories = useAppSelector((state) => state.incomeExpense.categories)
    console.log('categories', categories);    

    const handleAdd = () => {
        router.push('/categories/0')
    }
  
    return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-4xl">Categories</p>
        <MainButton 
            additionalClassName="hover:shadow-xl"
            onClick={handleAdd}
        >
            Add
        </MainButton>
      </div>

      <div className="mt-7 min-h-96 bg-white rounded-2xl shadow-xl">
        <div className="relative overflow-x-auto rounded-2xl ">
          <table className="table-auto w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3">Expense Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 border-b hover:bg-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Bills</th>
                <td className="px-6 py-4">Faturalar</td>
                <td className="px-6 py-4">1000</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b hover:bg-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Entertainment</th>
                <td className="px-6 py-4">Eğlence</td>
                <td className="px-6 py-4">2000</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b hover:bg-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Shopping</th>
                <td className="px-6 py-4">Alışveriş</td>
                <td className="px-6 py-4">3000</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
