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
          data={{ title: 'Respiração ', amount: '42' }}
          delay={1}
        />
      </Content>
    </Container>
  )
}
