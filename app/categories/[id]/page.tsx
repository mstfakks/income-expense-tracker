"use client"
import EditCategoryForm from "@/components/edit-category/edit-category-form";
import MainButton from "@/components/shared/main-button";
import { useRouter } from "next/navigation";

const EditCategory = () => {
    const router = useRouter()    
    
    const handleBack = () => {
        router.back()
    }

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-4xl">Edit Category</p>
        <MainButton
          additionalClassName="hover:shadow-xl"
          onClick={handleBack}
        >
          Geri
        </MainButton>
      </div>

      <div className="mt-7 min-h-96 bg-white rounded-2xl shadow-xl">
        <div className="py-8 px-4 max-w-2xl mx-auto">
            <EditCategoryForm />
        </div>
      </div>
    </>
  );
};

export default EditCategory;
