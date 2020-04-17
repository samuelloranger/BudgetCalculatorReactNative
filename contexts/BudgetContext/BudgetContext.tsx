import { createContext } from 'react'
import IBudgetContextState from './Interfaces/IBudgetContextState'

export default createContext({
	currentStep: 1
} as IBudgetContextState)
