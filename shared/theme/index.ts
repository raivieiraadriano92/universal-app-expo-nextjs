import { extendTheme } from 'native-base'

import { colors } from './colors'
import { Button } from './components/button'
import { Checkbox } from './components/checkbox'
import { Heading } from './components/heading'
import { Input } from './components/input'
import { Text } from './components/text'
import { sizes } from './sizes'
import { typography } from './typography'

export const theme = extendTheme({
  colors,
  components: {
    Button,
    Checkbox,
    Heading,
    Input,
    Text
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light'
  },
  sizes,
  ...typography
})

type CustomThemeType = typeof theme

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
