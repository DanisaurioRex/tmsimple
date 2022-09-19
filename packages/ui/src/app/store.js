import { configureStore } from '@reduxjs/toolkit'
import testCasesReducer from '../features/test-cases/testCasesSlice'

export const store = configureStore({
	reducer: {
		testCasesReducer
	}
})