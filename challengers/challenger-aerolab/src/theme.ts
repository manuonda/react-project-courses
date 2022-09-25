import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const customTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'red',
    components: ['Button', 'Badge'],
  }),
  withDefaultColorScheme({
    colorScheme: 'blue',
    components: ['Alert', 'Table'],
  }),
)

export default customTheme;