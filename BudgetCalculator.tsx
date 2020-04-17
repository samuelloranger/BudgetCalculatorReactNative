import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'

//Components
import { FormIncomes } from './components'
import BudgetContext from './contexts/BudgetContext/BudgetContext'
import { typo, colors } from './constants/styles'

const BudgetCalculator = () => {
	const { incomes } = useContext(BudgetContext)

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{incomes.map((income, key) => {
					const { name, hour_rate, hours_per_week } = income
					return (
						<View key={key} style={styles.content__item}>
							<Text style={typo.h3}>{name}</Text>
							<Text style={{ color: colors.white }}>
								Weekly: {Number(hour_rate * hours_per_week / 4).toFixed(2)}$
							</Text>
							<Text style={{ color: colors.white }}>
								Mounthly: {Number(hour_rate * hours_per_week).toFixed(2)}$
							</Text>
						</View>
					)
				})}
			</View>

			<FormIncomes />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		fontSize: 28,
		flex: 1,
		backgroundColor: '#373a3c',
		paddingTop: 125,
		alignItems: 'center'
	},
	content: {
		width: '90%',
		marginBottom: 15
	},
	content__item: {
		marginBottom: 25
	},
	title: {
		color: '#fff'
	}
})

export default BudgetCalculator
