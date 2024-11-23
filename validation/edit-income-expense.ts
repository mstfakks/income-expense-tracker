import z from "zod";

export const incomeExpenseSchema = z.object({
    type: z.string().min(1, {message: "Gelir gider türü seçim alanı zorunludur!"}),
    description: z.string(),
    amount: z.preprocess((value) => {
        if(value === "") return undefined
        return Number(value)
    }, z.number({required_error: 'Miktar alanı zorunludur!'})),
    date: z.string().min(1, {message: 'Tarih alanı zorunludur!'}),
    category: z.string().min(1, {message: "Kategori alanı zorunludur!"}) 
})