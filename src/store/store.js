/**
 * @author jean-jacques BOERO
 * @file store de l'application
 */
import { configureStore } from '@reduxjs/toolkit'
import sliceQuiz from './sliceQuiz/sliceQuiz.js'

export const store = configureStore({
  reducer: {
    StoreState: sliceQuiz
  },
}) 