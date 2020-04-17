import React from 'react'

//Context
import BudgetContextProvider from './contexts/BudgetContext/BudgetContextProvider'

//Component
import BudgetCalculator from './BudgetCalculator'

const App = () => {
	return (
		<BudgetContextProvider>
			<BudgetCalculator />
		</BudgetContextProvider>
	)
}

export default App
