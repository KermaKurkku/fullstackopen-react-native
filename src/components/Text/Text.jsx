import React from 'react';
import { Text as NativeText, StyleSheet} from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.normal,
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	colorInverted: {
		color: theme.colors.textInverted,
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
	},
	fontSizeHeading: {
		fontSize: theme.fontSizes.heading,
	},
	fontWeihtBold: {
		fontWeight: theme.fontWeights.bold,
	},
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
	const textStyle = [
		styles.text,
		color == 'textInverted' && styles.colorInverted,
		color == 'textSecondary' && styles.colorTextSecondary,
		color == 'primary' && styles.colorPrimary,
		fontSize == 'subheading' && styles.fontSizeSubheading,
		fontSize == 'heading' && styles.fontSizeHeading,
		fontWeight == 'bold' && styles.fontWeihtBold,
		style,
	];

	return <NativeText style={textStyle} {...props}/>;
};

export default Text;