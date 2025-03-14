/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

export function useThemeColor(
  colorName: ColorName,
  props?: { light?: string; dark?: string }
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props && props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  return Colors[theme][colorName];
}
