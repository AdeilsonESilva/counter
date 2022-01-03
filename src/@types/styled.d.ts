import 'styled-components'

declare module 'styled-components' {
  interface ITheme {
    COLORS: {
      main: string
      main_light: string

      title: string
      description: string

      border: string
      border_light: string
      shape: string

      icon: string

      background: string
    }
    FONTS: {
      primary_semiBold: string
      primary_bold: string

      secondary_medium: string
    }
  }

  export interface DefaultTheme extends ITheme {}
}
