import React, { useState, useEffect } from 'react'
import { StatusBar, Alert } from 'react-native'

import { useNavigationState } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useCounterSelected } from '@hooks/useCounterSelected'

import { getRealm } from '@services/realm'
import { ICounter } from '@dtos/counter'

import { Header } from '@components/Header'
import { AccountantsCard } from '@components/AccountantsCard'

import emptyLottie from '@utils/empty-lottie.json'

import {
  Container,
  Content,
  ListCounters,
  EmptyContainer,
  EmptyDogAnimation,
  EmptyTitle
} from './styles'

export const Home: React.FC = () => {
  const TAB_HEIGHT = useBottomTabBarHeight()

  const { counterSelected, setCounterSelected } = useCounterSelected()

  const [counters, setCounters] = useState<ICounter[]>([])

  const reloadRegisteredCounters = useNavigationState(state => state.index)

  function handleCounterSelection(counter: ICounter) {
    setCounterSelected(counter)
  }

  async function handleDeleteCounter(id: string) {
    try {
      const realm = await getRealm()

      setCounters(counters.filter(counter => counter.id !== id))

      realm.write(() => {
        realm.delete(realm.objectForPrimaryKey('Counters', id))
      })

      if (counterSelected!.id === id) {
        setCounterSelected(null)
      }
    } catch {
      Alert.alert(
        'An error has occurred',
        'It was not possible to delete this counter. Try again.'
      )
    }
  }

  useEffect(() => {
    async function loadRegisteredCounters() {
      try {
        const realm = await getRealm()

        const data = realm.objects('Counters') as any
        setCounters(data)
      } catch {
        Alert.alert(
          'An error has occurred',
          'It was not possible to list your registered accountants. Try again.'
        )
      }
    }
    loadRegisteredCounters()
  }, [reloadRegisteredCounters])

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Header title="Counters" />

      <Content>
        {counters.length ? (
          <ListCounters // Here a Flat-list will be added.
            contentContainerStyle={{
              paddingBottom: TAB_HEIGHT
            }}
          >
            {counters.map(({ id, title, amount }, index) => (
              <AccountantsCard
                key={id}
                data={{
                  title,
                  amount
                }}
                onPress={() => handleCounterSelection({ id, title, amount })}
                onDelete={() => handleDeleteCounter(id)}
                selected={counterSelected?.id === id}
                delay={index}
              />
            ))}
          </ListCounters>
        ) : (
          <EmptyContainer>
            <EmptyDogAnimation source={emptyLottie} autoPlay />
            <EmptyTitle>
              No counters have been added yet.{'\n'}Go to settings to add a new
              one.
            </EmptyTitle>
          </EmptyContainer>
        )}
      </Content>
    </Container>
  )
}
