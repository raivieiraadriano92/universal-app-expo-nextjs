import { Text } from './text'

export const Input = {
  defaultProps: {
    size: 'lg'
  },
  sizes: {
    lg: {
      ...Text.variants.body2,
      borderRadius: '2xl',
      h: 13,
      p: 4
    }
  }
}
