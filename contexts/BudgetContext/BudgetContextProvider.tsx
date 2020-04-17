import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'

//Context
import BudgetContext from './BudgetContext'

//Interfaces
import IBudgetContextState from './Interfaces/IBudgetContextState'
import IIncome from '../../constants/Interfaces/IIncome'
import ISpending from '../../constants/Interfaces/ISpending'

interface IProps {
	children: JSX.Element
}

const BudgetContextProvider = ({ children }: IProps) => {
	useEffect(() => {
		const getData = async () => {
			const lsData = await AsyncStorage.getItem('budget')
			if (lsData) {
				const data = JSON.parse(lsData)

				if (data[0].length || data[1].length) {
					setState((prevState: IBudgetContextState) => ({
						...prevState,
						incomes: data[0],
						spendings: data[1],
						currentStep: 3
					}))
				}
			}
		}

		getData()
	}, [])

	const deleteLocalStorage = async () => {
		try {
			await AsyncStorage.removeItem('budget')
		} catch (err) {}

		setIncomes([])
		setSpendings([])
	}

	const saveToLocalStorage = async (incomes: IIncome[], spendings: ISpending[]) => {
		const arrData = [ incomes, spendings ]
		try {
			await AsyncStorage.setItem('budget', JSON.stringify(arrData))
		} catch (err) {}
	}

	const setIncomes = (incomes: IIncome[]) => {
		setState((prevState: IBudgetContextState) => ({
			...prevState,
			incomes: incomes as IIncome[]
		}))
	}

	const setSpendings = (spendings: ISpending[]) => {
		setState((prevState: IBudgetContextState) => ({
			...prevState,
			spendings: spendings as ISpending[]
		}))
	}

	const handleStep = (step: number) => {
		console.log(`${state.currentStep}`)
		setState((prevState: IBudgetContextState) => ({
			...prevState,
			currentStep: step
		}))
	}

	const [ state, setState ] = useState<IBudgetContextState>({
		currentStep: 1,
		incomes: [],
		spendings: [],
		setIncomes,
		setSpendings,
		saveToLocalStorage,
		deleteLocalStorage,
		handleStep: handleStep
	})

	return <BudgetContext.Provider value={state}>{children}</BudgetContext.Provider>
}

export default BudgetContextProvider
