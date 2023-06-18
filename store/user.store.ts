import { StateInitializerArg, Reducer } from './index'

export class UserState {
  name: string = ''
  age: number | null = null

  constructor (_args: StateInitializerArg) {
    this.name = 'John'
  }
}

export type UserActionType = 'user/SET_USER' | 'user/CLEAR_USER'

export interface SetUserArgs {
  name: string
  age: number
}

export const userReducer: Reducer<UserActionType> = {
  ['user/SET_USER'] (getState, payload: SetUserArgs) {
    const user = { ...getState().user, ...payload }

    return {
      ...getState(),
      user
    }
  },

  async ['user/CLEAR_USER'] (getState) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('user/CLEAR_USER, current user name: ', getState().user?.name)

    return {
      ...getState(),
      user: null
    }
  }
}
