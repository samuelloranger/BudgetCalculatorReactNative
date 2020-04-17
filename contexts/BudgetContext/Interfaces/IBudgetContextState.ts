import IIncome from '../../../constants/Interfaces/IIncome'
import ISpending from '../../../constants/Interfaces/ISpending'

export default interface IContentfulContextState {
	readonly currentStep: number
	readonly incomes: IIncome[]
	readonly spendings: ISpending[]
	readonly setIncomes: (incomes: any) => void
	readonly setSpendings: (spendings: any) => void
	readonly saveToLocalStorage: (incomes: IIncome[], spendings: ISpending[]) => void
	readonly deleteLocalStorage: () => void
	readonly handleStep: (step: number) => void
}
