/**
 * @author Samuel Loranger <samuelloranger@gmail.com>
 */

import React, { useState, useContext, Fragment } from 'react'
import {
	View,
	Text,
	NativeSyntheticEvent,
	TextInputChangeEventData,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native'

//Interfaces
import IIncome from '../constants/Interfaces/IIncome'

//Components
import { Input, Button } from '.'
import BudgetContext from '../contexts/BudgetContext/BudgetContext'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

//Styles
import { typo, colors } from '../constants/styles'

const emptyIncome: IIncome = {
	id: 0,
	name: '',
	hour_rate: 0,
	hours_per_week: 0
}

const FormIncomes = () => {
	const { incomes, setIncomes } = useContext(BudgetContext)
	const [ newIncome, setNewIncome ] = useState<IIncome>(emptyIncome)

	const [ errors, setErrors ] = useState({
		name: false,
		name_empty_error: 'You need to enter a name for this income.',
		hour_rate: false,
		hour_rate_empty_error: 'You need to enter an hour rate for this income',
		hours_per_week: false,
		hours_per_week_empty_error: 'You need to enter your hours per week for this income'
	})

	const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>, name: string): void => {
		const value = e.nativeEvent.text

		setErrors((prevState) => ({
			...prevState,
			[name]: value === ''
		}))

		setNewIncome((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = (): void => {
		const { name, hour_rate, hours_per_week } = newIncome

		setNewIncome(emptyIncome)

		setIncomes([
			...incomes,
			{
				id: Date.now(),
				name: name,
				hour_rate: hour_rate,
				hours_per_week: hours_per_week
			}
		])
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss()
			}}>
			<View style={styles.container}>
				<Text style={{ ...typo.h2, ...styles.title }}>Enter your incomes</Text>

				<Text>
					{errors.name ? (
						<Text style={typo.error}>
							<FontAwesomeIcon icon={faTimes} style={{ color: colors.red }} />
							{errors.name_empty_error}
						</Text>
					) : (
						''
					)}
				</Text>

				<Input label='Job name' name='name' value={newIncome.name} onChange={handleChange} />

				<Text>
					{errors.hours_per_week ? (
						<Text style={typo.error}>
							<FontAwesomeIcon icon={faTimes} />
							{errors.hours_per_week_empty_error}
						</Text>
					) : (
						''
					)}
				</Text>
				<Input
					label='Hours per week'
					name='hours_per_week'
					value={newIncome.hours_per_week !== 0 ? newIncome.hours_per_week.toString() : ''}
					onChange={handleChange}
					keyboardType='number-pad'
				/>

				<Text>
					{errors.hour_rate ? (
						<Text style={typo.error}>
							<FontAwesomeIcon icon={faTimes} />
							{errors.hour_rate_empty_error}
						</Text>
					) : (
						''
					)}
				</Text>
				<Input
					label='Hour rate'
					name='hour_rate'
					value={newIncome.hour_rate !== 0 ? newIncome.hour_rate.toString() : ''}
					onChange={handleChange}
					keyboardType='number-pad'
				/>

				<Button onPress={handleSubmit} style={styles.btnSubmit}>
					<Text style={{ flex: 0.25 }}>Add</Text>
				</Button>

				<Button onPress={() => setIncomes([])}>Reset</Button>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '90%'
	},
	title: {
		marginBottom: 25
	},
	btnSubmit: {
		marginTop: 12
	},
	btnSubmitContent: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center'
	}
})

export default FormIncomes
