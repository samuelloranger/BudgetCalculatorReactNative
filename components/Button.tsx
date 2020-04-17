import React from 'react'
import { StyleSheet, Text, StyleProp } from 'react-native'

//Styles
import { colors } from '../constants/styles'

interface IProps {
	readonly children: JSX.Element | string
	readonly onPress?: Function
	readonly style?: StyleProp<any>
}

const Button = ({ children, onPress, style }: IProps): JSX.Element => {
	return (
		<Text onPress={onPress ? () => onPress() : undefined} style={{ ...styles.button, ...style }}>
			<Text>{children}</Text>
		</Text>
	)
}

const styles = StyleSheet.create({
	button: {
		height: 42,
		textAlign: 'center',
		backgroundColor: colors.blue,
		shadowOffset: { width: 2, height: 3 },
		shadowColor: 'black',
		shadowRadius: 3,
		shadowOpacity: 0.5,
		color: colors.white,
		textTransform: 'uppercase',
		padding: 12,
		width: 250,
		borderRadius: 8,
		marginBottom: 25
	}
})

export default Button
