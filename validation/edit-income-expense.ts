import dayjs from "dayjs";
import z from "zod";

export const incomeExpenseSchema = z.object({
    type: z.string().min(1, {message: "Gelir gider türü seçim alanı zorunludur!"}),
    description: z.string(),
    amount: z.preprocess((value) => {
        if(value === "") return undefined
        return Number(value)
    }, z.number({required_error: 'Miktar alanı zorunludur!', invalid_type_error: 'Sayısal karakterler giriniz!'})),
    date: z.string().min(1, {message: 'Tarih alanı zorunludur!'}),
    categoryId: z.string().min(1, {message: "Kategori alanı zorunludur!"}) 
})