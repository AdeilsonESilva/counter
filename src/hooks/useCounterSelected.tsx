import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext
} from 'react'

import { ICounter } from '@dtos/counter'

interface ISelectedAccountantContextData {
  counterSelected: ICounter | null
  setCounterSelected: Dispatch<SetStateAction<ICounter | null>>
}

const selectedAccountantContext = createContext(
  {} as ISelectedAccountantContextData
)

export const SelectedAccountantProvider: React.FC = ({ children }) => {
  const [counterSelected, setCounterSelected] = useState<ICounter | null>(null)

  return (
    <selectedAccountantContext.Provider
      value={{ counterSelected, setCounterSelected }}
    >
      {children}
    </selectedAccountantContext.Provider>
  )
}

export const useCounterSelected = () => useContext(selectedAccountantContext)
