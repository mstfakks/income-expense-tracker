"use client"
import CategoryTable from "@/components/categories/category-table";
import MainButton from "@/components/shared/main-button";
import { useRouter } from "next/navigation";

const CategoriesPage = () => {
    const router = useRouter()
    
    const handleAdd = () => {
        router.push('/categories/0')
    }
  
    return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-4xl">Kategoriler</p>
        <MainButton 
            additionalClassName="hover:shadow-xl"
            onClick={handleAdd}
        >
            Ekle
        </MainButton>
      </div>

      <div className="mt-7 min-h-96 bg-white rounded-2xl shadow-xl">
        <CategoryTable />
      </div>
    </>
  );
};

export default CategoriesPage;
