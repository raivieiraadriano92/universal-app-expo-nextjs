export const Button = {
  defaultProps: {
    size: 'lg'
  },
  sizes: {
    sm: {
      borderRadius: 'xl',
      h: 9,
      px: 7,
      _text: {
        lineHeight: 'md',
        fontWeight: 'medium',
        fontSize: 'sm'
      }
    },
    md: {
      borderRadius: '2xl',
      h: 13,
      px: 6,
      _text: {
        lineHeight: 'lg',
        fontWeight: 'bold',
        fontSize: 'md'
      }
    },
    lg: {
      borderRadius: '2xl',
      h: 16,
      px: 6,
      _text: {
        lineHeight: 'lg',
        fontWeight: 'bold',
        fontSize: 'md'
      }
    }
  }
}
