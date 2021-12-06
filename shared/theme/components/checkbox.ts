import { Text } from './text'

export const Checkbox = {
  baseStyle: { alignItems: 'center' },
  sizes: {
    sm: {
      bg: 'transparent',
      _text: {
        ...Text.variants.caption3,
        color: 'gray.500',
        ml: 3
      }
    }
  }
}
