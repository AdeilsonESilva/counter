import styled from 'styled-components/native'

import { MotiView } from 'moti'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(MotiView).attrs({
  from: {
    opacity: 0,
    translateY: 100
  },
  animate: {
    opacity: 1,
    translateY: 0
  },
  transition: { type: 'timing' }
})`
  width: 100%;
  height: ${RFValue(165)}px;

  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.COLORS.border};
  border-radius: 16px;

  margin-top: 16px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.shape};
`

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
})`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ theme }) => theme.COLORS.description};
`

export const Amount = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ theme }) => theme.COLORS.title};

  text-align: center;
`

export const Control = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: ${RFValue(46)}px;
  height: ${RFValue(46)}px;

  border-radius: 50px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.main_light};
`

export const ClearButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: ${RFValue(72)}px;
  height: ${RFValue(34)}px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.border_light};
`

export const ClearTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ theme }) => theme.COLORS.description};
`
