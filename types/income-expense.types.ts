
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
    categoryId?: number | string;
    categoryName?: string    
}