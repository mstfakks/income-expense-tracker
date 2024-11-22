import { categorySchema } from "@/validation/edit-category";
import MainButton from "../shared/main-button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "@/types/category.types";
import FormInput from "../shared/form-input";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { handleAddCategory } from "@/redux/features/incomeExpenseSlice";

const EditCategoryForm = () => {
    const dispatch = useAppDispatch()
    const categories = useAppSelector((state) => state.incomeExpense.categories)
    
    const {
        handleSubmit,
        register,
        formState: { errors, isValid, isSubmitting }
    } = useForm<Category>({
        defaultValues: {
            limit: 0,
            name: '',
            description: ''
        },
        resolver: zodResolver(categorySchema)
    })
    
    const onSubmit: SubmitHandler<Category> = (values: Category) => {
        const newCategory = {
            ...values,
            id: Date.now()
        }

        dispatch(handleAddCategory(newCategory))                
    }

    console.log('categories', categories);    
    
    return(
        <>
            <h2 className="mb-4 text-xl font-bold text-gray-800">Yeni Kategori Ekle</h2>
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
                            Ekle
                        </MainButton>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditCategoryForm;