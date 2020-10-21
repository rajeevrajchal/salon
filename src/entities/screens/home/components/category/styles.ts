import { StyleSheet } from 'react-native';
import color from '../../../../../assets/styles/color';
import { padding } from '../../../../../assets/styles/vars';

export default StyleSheet.create({
  categoryImage: {
    width: 70,
    height: 70,
    backgroundColor: color.default,
    padding: padding.sm,
    borderRadius: padding.md,
  },
  categoryLabel: {
    paddingVertical: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
