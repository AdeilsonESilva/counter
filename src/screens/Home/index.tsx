import React, { useCallback } from 'react'
import { Alert } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useCounter } from '@hooks/useCounter'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { ICounter } from '@dtos/counter'

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

  const keyStorage = '@counter:storage'

  const { counters, setCounters, counterSelected, setCounterSelected } =
    useCounter()

  async function loadRegisteredCounters() {
    try {
      const data = await AsyncStorage.getItem(keyStorage)
      const accountantsAlreadyRegistered = JSON.parse(data!) || []

      setCounters(accountantsAlreadyRegistered)
    } catch {
      Alert.alert(
        'An error has occurred',
        'It was not possible to list the registered accountants. Try again.'
      )
    }
  }

  function handleCounterSelection(counter: ICounter) {
    setCounterSelected(counter)
  }

  async function handleDeleteCounter(id: string) {
    try {
      const data = await AsyncStorage.getItem(keyStorage)
      const accountantsAlreadyRegistered = JSON.parse(data!) as ICounter[]

      const counterDeletedOnlyStorage = accountantsAlreadyRegistered.filter(
        counter => counter.id !== id
      )

      setCounters(counters.filter(counter => counter.id !== id))

      await AsyncStorage.setItem(
        keyStorage,
        JSON.stringify(counterDeletedOnlyStorage)
      )

      if (counterSelected) {
        if (counterSelected!.id === id) {
          setCounterSelected(null)
        }
      }
    } catch {
      Alert.alert(
        'An error has occurred',
        'It was not possible to delete this counter. Try again.'
      )
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadRegisteredCounters()
    }, [])
  )

  return (
    <Container>
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
