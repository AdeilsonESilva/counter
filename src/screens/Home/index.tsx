import React from 'react'
import { StatusBar } from 'react-native'

// import LottieView from 'lottie-react-native'
// import { RFValue } from 'react-native-responsive-fontsize'

import { Header } from '@components/Header'
import { AccountantsCard } from '@components/AccountantsCard'

// import emptyLottie from '@utils/empty-lottie.json'

import { Container, Content } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Header title="Counters" />

      <Content>
        {/* <EmptyList>
          <LottieView
            source={emptyLottie}
            autoPlay
            loop
            style={{ width: RFValue(200) }}
          />

          <EmptyTitle>
            No counters have been added yet.{'\n'}Go to settings to add a new
            one.
          </EmptyTitle>
        </EmptyList> */}

        <AccountantsCard
          data={{ title: 'Respiração', amount: '42' }}
          delay={1}
          selected
        />
        <AccountantsCard
          data={{ title: 'Vezes que acordei', amount: '1' }}
          delay={2}
        />
        <AccountantsCard
          data={{ title: 'Coxinhas que comi na semana', amount: '16' }}
          delay={3}
        />
      </Content>
    </Container>
  )
}
