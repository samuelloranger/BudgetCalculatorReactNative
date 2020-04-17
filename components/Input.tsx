/**
 * @author Samuel Loranger <samuelloranger@gmail.com>
 */

import React, { useState } from 'react'
import {
	View,
	Text,
	TextInput,
	NativeSyntheticEvent,
	TextInputChangeEventData,
	StyleSheet,
	StyleProp,
	TextStyle,
	TextInputProps
} from 'react-native'
import { colors, typo } from '../constants/styles'

interface IProps {
	readonly label: string
	readonly name: string
	readonly value: string
	readonly keyboardType?: 'default' | 'numeric' | 'number-pad'
	onChange(e: NativeSyntheticEvent<TextInputChangeEventData>, name: string): void
}

const Input = ({ label, value, name, onChange, keyboardType = 'default' }: IProps): JSX.Element => {
	const [ styleInput, setStyleInput ] = useState<StyleProp<TextStyle>>(styles.input)

	return (
		<View>
			<Text style={{ ...styles.label, ...typo.h3 }}>{label}</Text>
			<TextInput
				style={styleInput}
				defaultValue=''
				value={value.toString()}
				onChange={(text: any) => onChange(text, name)}
				onFocus={() => setStyleInput(styles.inputFocus)}
				onBlur={() => setStyleInput(styles.input)}
				keyboardAppearance={'dark'}
				keyboardType={keyboardType}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	label: {
		marginBottom: 5
	},
	input: {
		backgroundColor: colors.white,
		color: colors.black,
		height: 30,
		borderRadius: 5,
		paddingLeft: 4
	},
	inputFocus: {
		backgroundColor: colors.white,
		color: colors.black,
		height: 30,
		borderRadius: 5,
		paddingLeft: 4,
		shadowOffset: { width: 0, height: 4 },
		shadowColor: colors.darkGray,
		shadowRadius: 8
	}
})

export default Input
