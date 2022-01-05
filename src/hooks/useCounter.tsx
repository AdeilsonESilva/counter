import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext
} from 'react'

import { ICounter } from '@dtos/counter'

interface ICounterContextData {
  counters: ICounter[]
  setCounters: Dispatch<SetStateAction<ICounter[]>>
  counterSelected: ICounter | null
  setCounterSelected: Dispatch<SetStateAction<ICounter | null>>
}

const counterContext = createContext({} as ICounterContextData)

export const CounterProvider: React.FC = ({ children }) => {
  const [counters, setCounters] = useState<ICounter[]>([])
  const [counterSelected, setCounterSelected] = useState<ICounter | null>(null)

  return (
    <counterContext.Provider
      value={{ counters, setCounters, counterSelected, setCounterSelected }}
    >
      {children}
    </counterContext.Provider>
  )
}

export const useCounter = () => useContext(counterContext)
