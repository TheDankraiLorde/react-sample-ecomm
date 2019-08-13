import {UserActionTypes} from './user.types'

export const setCurUser = (user) => ({
    type: UserActionTypes.SCU,
    payload: user
})