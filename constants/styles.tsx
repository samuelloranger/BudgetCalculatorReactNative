import { StyleSheet } from 'react-native'

const colors = {
	black: '#000',
	white: '#fff',
	gray: '#373a3c',
	darkGray: '#292a2b',
	blue: '#0d64e6',
	red: '#e41717'
}

const typo = StyleSheet.create({
	h1: {
		fontSize: 40,
		fontWeight: '700',
		color: colors.white
	},
	h2: {
		fontSize: 30,
		fontWeight: '600',
		color: colors.white
	},
	h3: {
		fontWeight: '500',
		color: colors.white
	},
	error: {
		color: colors.red
	}
})

export { colors, typo }
