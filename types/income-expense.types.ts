
export enum IncomeExpenseType {
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE'
}

export interface IncomeExpense {
    id?: number;
    type: IncomeExpenseType | string;
    description?: string;
    amount:number | string;
    date?: Date | String;
    category: {
        id: number,
        name: string
    } | string;
}