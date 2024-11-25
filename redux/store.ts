import { configureStore } from "@reduxjs/toolkit"
import { incomeExpenseReducer } from "./features/incomeExpenseSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { uiReducer } from "./features/uiSlice";

export const store = configureStore({
    reducer: {
        incomeExpense: incomeExpenseReducer,
        ui: uiReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;