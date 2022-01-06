import 'styled-components'
import { ITheme } from '@dtos/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
