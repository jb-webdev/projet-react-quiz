/**
 * @author jean-jacques BOERO
 * @file sliceQuiz reducers
 */
import { createSlice } from "@reduxjs/toolkit"

export const sliceQuiz = createSlice({
    name: "sliceQuiz",
    // etat de initial de non states dans l'application
    initialState:
    {
        module: "",
    },
    // reducer avec les actions necessaire pour modifier non etats
    reducers: {
        AddModuleTest: (state, action) => {
            state.module = action.payload
        },
    }
})

export const { AddModuleTest } = sliceQuiz.actions


export default sliceQuiz.reducer