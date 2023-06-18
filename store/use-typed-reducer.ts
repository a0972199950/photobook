// [Credit]: https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch

import * as React from 'react'
import { userReducer, SetUserArgs } from './user.store'
import type { ActionType, State } from './index'

const reducerHandlers = {
  ...userReducer
}

const dispatchFactory = (coreDispatch: React.Dispatch<State>, getState: () => State, stateRef: React.MutableRefObject<State>) => {
  /** [Dispatch overloads]: User store  */
  function dispatch (actionType: 'user/SET_USER', payload: SetUserArgs): Promise<void>
  function dispatch (actionType: 'user/CLEAR_USER'): Promise<void>

  async function dispatch (actionType: ActionType, payload?: any) {
    const handler = reducerHandlers[actionType]
    let newState: State

    try {
      if (!handler) {
        throw new Error(`Cannot find correspond reducer handler for action type: ${actionType}. Please make sure you already define it`)
      }
      
      newState = await handler(getState, payload)
    } catch (e) {
      newState = getState()
    }
    
    stateRef.current = newState
    return coreDispatch(newState)
  }

  return dispatch
}

export type Dispatch = ReturnType<typeof dispatchFactory>

const reducer: React.Reducer<State, State> = (_state: State, newState: State): State => newState

const useTypedReducer = <StateInitializerArg>(
  stateInitializerArg: StateInitializerArg,
  stateInitializer: (args: StateInitializerArg) => State
): [State, Dispatch] => {
  const [state, coreDispatch] = React.useReducer(reducer, stateInitializerArg, stateInitializer)
  const stateRef = React.useRef(state)

  const getState = () => stateRef.current

  const dispatch: Dispatch = React.useMemo(
    () => dispatchFactory(coreDispatch, getState, stateRef),
    [dispatchFactory, coreDispatch]
  )

  return [state, dispatch]
}

export default useTypedReducer
