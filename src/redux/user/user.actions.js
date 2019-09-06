import UserActionTypes from './user.types'


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (err) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: err
})

export const emailSignInStart = (emailAndPass) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPass
})

export const checkUserSignIn = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})


export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFail = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAIL,
    payload: error
})

export const userSignUpStart= (user_deets) => ({
        type: UserActionTypes.SIGN_UP_START,
        payload: user_deets
})

export const userSignUpSuccess= ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user,additionalData}
})

export const userSignUpFail = (error) => ({
    type: UserActionTypes.SIGN_UP_FAIL,
    payload: error
})