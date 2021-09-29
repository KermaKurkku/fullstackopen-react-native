import { Platform } from "react-native";

const theme = {
	colors: {
		textPrimary: '#24292e',
    textSecondary: '#586069',
    textInverted: '#FFFFFF',
    primary: '#0366d6',
    appBar: '#24292e',
		cardBack: '#FFFFFF',
		separatorBack: '#E1E4E8'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
		heading: 24,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;