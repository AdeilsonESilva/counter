import 'styled-components'

declare module 'styled-components' {
  interface ITheme {
    COLORS: {
      main: string
      main_light: string

      title: string
      description: string

      border: string
      shape: string

      icon: string

      background: string
    }
  }

  export interface DefaultTheme extends ITheme {}
}
