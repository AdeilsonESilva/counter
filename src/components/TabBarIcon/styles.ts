import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
`

export const TabBarFocusedLine = styled.View`
  width: 20px;
  height: 4px;

  border-radius: 10px;

  margin-top: 5px;

  position: absolute;
  bottom: -40%;

  background-color: ${({ theme }) => theme.COLORS.main};
`
