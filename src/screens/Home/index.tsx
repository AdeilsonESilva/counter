import React, { useEffect } from 'react'
import { StatusBar, Alert } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useCounter } from '@hooks/useCounter'

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

  const { counters, setCounters, counterSelected, setCounterSelected } =
    useCounter()

  const checkFocused = useIsFocused()

  function handleCounterSelection(counter: ICounter) {
    setCounterSelected(counter)
  }

  async function handleDeleteCounter(id: string) {
    try {
      const realm = await getRealm()

      setCounters(counters.filter(counter => counter.id !== id))

      if (counterSelected) {
        if (counterSelected!.id === id) {
          setCounterSelected(null)
        }
      }

      realm.write(() => {
        const filteredCounter = realm.objectForPrimaryKey('Counters', id)
        realm.delete(filteredCounter)
      })
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
  }, [checkFocused === true])

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
