import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'

import { useNavigationState } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import { getRealm } from '@services/realm'

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

interface ICounter {
  id: string
  title: string
  amount: string
}

export const Home: React.FC = () => {
  const TAB_HEIGHT = useBottomTabBarHeight()

  const [counters, setCounters] = useState<ICounter[]>([])

  const reloadRegisteredCounters = useNavigationState(state => state.index)

  async function handleDeleteCounter(id: string) {
    try {
      const realm = await getRealm()

      setCounters(counters.filter(counter => counter.id !== id))

      realm.write(() => {
        realm.delete(realm.objectForPrimaryKey('Counters', id))
      })
    } catch {
      console.log('Unable to delete counter.')
    }
  }

  useEffect(() => {
    async function loadRegisteredCounters() {
      const realm = await getRealm()

      const data = realm.objects('Counters') as any
      setCounters(data)
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
                onDelete={() => handleDeleteCounter(id)}
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
