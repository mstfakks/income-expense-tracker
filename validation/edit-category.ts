import z from "zod";

export const categorySchema = z.object({
    name: z.string().trim().min(1, {message: "İsim alanı zorunludur!"}),
    limit: z.preprocess((value) => {
        if(value === "") return undefined
        return Number(value)
    }, z.number({required_error: 'Limit alanı zorunludur!'})),
    description: z.string()
})
