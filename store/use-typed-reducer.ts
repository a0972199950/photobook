// [Credit]: https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch

import * as React from 'react'
import { userReducer } from './user.store'
import type { ActionType, State, Dispatch } from './types'

const reducerHandlers = {
  ...userReducer
}

const dispatchFactory = (coreDispatch: React.Dispatch<State>, getState: () => State, stateRef: React.MutableRefObject<State>) => {
  const dispatch: Dispatch = async (actionType: ActionType, payload?: any) => {
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
