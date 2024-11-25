import { useParams, useRouter } from "next/navigation";
import FormInput from "../shared/form-input";
import SelectInput, { Option } from "../shared/select-input";
import DateInput from "../shared/date-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { IncomeExpense, IncomeExpenseType } from "@/types/income-expense.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { incomeExpenseSchema } from "@/validation/edit-income-expense";
import MainButton from "../shared/main-button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useMemo } from "react";
import { getStorageItem } from "@/utils/storage-util";
import { handleAddIncomeExpense, handleUpdateIncomeExpense, setCategories } from "@/redux/features/incomeExpenseSlice";
import { Category } from "@/types/category.types";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const defaultValues = {
  amount: "",
  categoryId: "",
  date: "",
  description: "",
  type: "",
};

const typeOptions: Option[] = [
    {
        label: 'Gelir',
        value: IncomeExpenseType.INCOME        
    },
    {
        label: 'Gider',
        value: IncomeExpenseType.EXPENSE
    }
]

const EditIncomeExpenseForm = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter()
  const dispatch = useAppDispatch();
  const { categories, incomeExpenseList } = useAppSelector(state => state.incomeExpense)
  

  useEffect(() => {
    const categories: Category[] = getStorageItem("categories");
    dispatch(setCategories(categories));
  }, []);
    
  
  const formattedCategories = useMemo(() => {
    return categories.map((item) => {
        return {
            label: item.name ? item.name : '',
            value: item.id ? item.id : 0
        }
    })
  }, [categories])
  

  const {
    handleSubmit,
    register,
    setValue,
    control,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IncomeExpense>({
    defaultValues,
    resolver: zodResolver(incomeExpenseSchema),
  });

  const onSubmit: SubmitHandler<IncomeExpense> = (values) => {
    const foundCategory = categories.find((item) => item.id === Number(values.categoryId))
    
    if(Number(id) !== 0) {
        const updateIncomeExpense = {
            ...values,
            categoryName: foundCategory?.name,
            date: dayjs(values?.date as string).format('DD/MM/YYYY'),
            id: Number(id)      
        } 
        dispatch(handleUpdateIncomeExpense(updateIncomeExpense))
    } else {
        const newIncomeExpense = {
            ...values,
            categoryName: foundCategory?.name,            
            date: dayjs(values?.date as string).format('DD/MM/YYYY'),
            id: Date.now()      
        }        
        
        dispatch(handleAddIncomeExpense([newIncomeExpense]))
    }
    reset()
    router.back();
  };

  useEffect(() => {
    if(id && id != '0'){
        const foundIncomeExpense = incomeExpenseList.find((item) => item.id === Number(id));
        
        if(foundIncomeExpense){
            const date = dayjs(foundIncomeExpense.date as string, 'DD/MM/YYYY').format('YYYY-MM-DD')
            setValue("amount", foundIncomeExpense?.amount)
            setValue("categoryId", foundIncomeExpense?.categoryId)
            setValue("type", foundIncomeExpense?.type)
            setValue("description", foundIncomeExpense?.description)
            setValue("date", date)
        }     
    }
  }, [id])

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        {id == "0" ? "Gelir Gider Ekle" : "Gelir Gider Güncelle"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          <SelectInput 
                label="Gelir gider tipi seçiniz." 
                options={typeOptions}
                name="type"
                errors={errors}
                register={register}                 
            />
          <FormInput
            name="amount"
            errors={errors}
            register={register}
            label="Miktar"
            placeholder="Miktarı Giriniz"
          />
          <DateInput 
            placeholder="Tarih seçiniz" 
            label="Tarih seçiniz"
            name="date"
            errors={errors}
            control={control} 
            />
          <SelectInput 
            label="Kategori seçiniz" 
            options={formattedCategories}
            name="categoryId"
            errors={errors}
            register={register} 
            />
          <FormInput
            name="description"
            errors={errors}
            register={register}
            label="Açıklama"
            placeholder="Açıklama giriniz"
            containerClass="col-span-2"
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

export default EditIncomeExpenseForm;
