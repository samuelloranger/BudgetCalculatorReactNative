/**
 * @author Samuel Loranger <samuelloranger@gmail.com>
 */

import React from 'react'
import { View, Text } from 'react-native'

// //Context
// import BudgetContext from '../contexts/BudgetContext/BudgetContext'

// //Interfaces
// import ISpending from '../constants/Interfaces/ISpending'

// //Components
// import { Input, Button } from './'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

// const emptySpending: ISpending = {
// 	id: 0,
// 	name: '',
// 	amount: 0
// }

export const FormSpendings = () => {
	// const { spendings, setSpendings } = useContext(BudgetContext)
	// const [ newSpending, setNewSpending ] = useState<ISpending>(emptySpending)

	// /**
	//  *
	//  * @param e ( ChangeEvent<HTMLInputElement>)
	//  */
	// const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
	// 	const input = e.currentTarget as HTMLInputElement

	// 	setNewSpending((prevState) => ({
	// 		...prevState,
	// 		[input.name]: input.value
	// 	}))
	// }

	// const handleSubmit = (e: FormEvent): void => {
	// 	e.preventDefault()

	// 	const { name, amount } = newSpending

	// 	setNewSpending(emptySpending)
	// 	setSpendings([
	// 		...spendings,
	// 		{
	// 			id: Date.now(),
	// 			name: name,
	// 			amount: amount
	// 		}
	// 	])
	// }

	return (
		<View>
			<Text>Enter your spendings</Text>
			{/* 
			<Input label='Name' name='name' type='text' value={newSpending.name} onChange={handleChange} />
			<Input label='Amount' name='amount' type='number' value={newSpending.amount} onChange={handleChange} /> */}

			{/* <Button>
				<span>
					<FontAwesomeIcon icon={faPlus} />Add
				</span>
			</Button> */}
		</View>
	)
}

export default FormSpendings
