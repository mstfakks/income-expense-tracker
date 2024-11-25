import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UiSlice {
    isDrawerOpen: boolean
}

const initialState: UiSlice = {
    isDrawerOpen: false
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        handleToggleDrawer: (state, action: PayloadAction<boolean>) => {
            state.isDrawerOpen = action.payload 
        }
    }
})

export const {
    handleToggleDrawer
} = uiSlice.actions

export const uiReducer = uiSlice.reducer
