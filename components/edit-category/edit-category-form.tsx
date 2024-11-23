import { categorySchema } from "@/validation/edit-category";
import MainButton from "../shared/main-button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "@/types/category.types";
import FormInput from "../shared/form-input";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { handleAddCategory, handleUpdateCategory } from "@/redux/features/incomeExpenseSlice";
import { useParams, useRouter } from "next/navigation";
import { getStorageItem, saveStorage } from "@/utils/storage-util";
import { useEffect } from "react";

const EditCategoryForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.incomeExpense.categories);
  const { id } = useParams<{ id: string }>();

  const {
    handleSubmit,
    register,
    setValue,
    
    formState: { errors, isValid, isSubmitting },
  } = useForm<Category>({
    defaultValues: {
      limit: 0,
      name: "",
      description: "",
    },
    resolver: zodResolver(categorySchema),
  });

  const onSubmit: SubmitHandler<Category> = (values: Category) => {
    console.log("values", values);
    if (Number(id) !== 0) {
      //Güncelleme
      const updatedValues = {...values, id: Number(id)}
      dispatch(handleUpdateCategory(updatedValues))
    } else {
      //const categories = getStorageItem("categories");

      const newCategory = {
        ...values,
        id: Date.now(),
      };

      dispatch(handleAddCategory([newCategory]));
      //categories.push(newCategory);
      //saveStorage("categories", categories);      
    }
    router.back();
  };

  useEffect(() => {
    if (id && id != "0") {
      const foundCategory = categories.find((item) => item.id === Number(id));
      console.log("foundCategory", foundCategory);
      if (foundCategory) {        
        setValue("name", foundCategory?.name);
        setValue("limit", foundCategory?.limit);
        setValue("description", foundCategory?.description);
      }
    }
  }, [id]);

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        {id == "0" ? "Yeni Kategori Ekle" : "Kategori Güncelle"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          <FormInput
            name="name"
            errors={errors}
            register={register}
            label="İsim"
            placeholder="Kategori ismini giriniz"
          />
          <FormInput
            name="limit"
            errors={errors}
            register={register}
            label="Limit"
            placeholder="Harcama limiti giriniz"
          />
          <FormInput
            name="description"
            errors={errors}
            register={register}
            containerClass="col-span-2"
            label="Açıklama"
            placeholder="Kategori açıklaması giriniz"
          />

          <div className="col-span-2">
            <MainButton
              type="submit"
              additionalClassName="text-sm"
              disabled={!isValid || isSubmitting}
            >
              {id == "0" ? "Ekle" : "Güncelle"}
            </MainButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditCategoryForm;
