import * as React from 'react'
import { UserState, UserActionType } from './user.store'
import useTypedReducer, { Dispatch } from './use-typed-reducer'

export interface State {
  user: UserState | null
}

export type ActionType = UserActionType

export type Reducer<PartialActionType extends Partial<ActionType>> = Record<PartialActionType, (getState: () => State, payload?: any) => State | Promise<State>>

export const Context = React.createContext<{ state: State, dispatch: Dispatch }>(null as any)

export interface StateInitializerArg {
  [key: string]: any
}

const stateInitializer = (args: StateInitializerArg): State => ({
  user: new UserState(args)
})

interface Props {
  stateInitializerArg?: StateInitializerArg
  children: React.ReactNode
}

export const StoreProvider: React.FC<Props> = ({ stateInitializerArg = {}, children }) => {
  const [state, dispatch] = useTypedReducer<StateInitializerArg>(stateInitializerArg, stateInitializer)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}
