"use client";
import EditCategoryForm from "@/components/edit-category/edit-category-form";
import MainButton from "@/components/shared/main-button";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const EditCategory = () => {
  const router = useRouter();
   
  const handleBack = () => {
    router.back();
  };  

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-4xl">Kategori Düzenle</p>
        <MainButton additionalClassName="hover:shadow-xl" onClick={handleBack}>
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
