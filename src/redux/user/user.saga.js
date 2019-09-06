import {takeLatest,put,all,call} from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {auth,googleProvider,createUserProfileDoc, getCurrentUser} from '../../firebase/firebase.utils'
import { signInSuccess, signInFailure, signOutSuccess, signOutFail, userSignUpFail, userSignUpSuccess } from './user.actions';

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({payload: {email,password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user)
    }
    catch(error){
        yield put([signInFailure(error)])
    }
}

export function* isAuthenticated(){
    try
    {
        const userAuth = yield getCurrentUser();
        if(userAuth === null)
            return
        else{
            yield getSnapshotFromUserAuth(userAuth)
        }
    }
    catch(error){
        yield put(signInFailure(error))
    }
}

export function* getSnapshotFromUserAuth(user,addtnlDta) {
    try{
        const userRef = yield call(createUserProfileDoc,user, addtnlDta);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
    }catch(error){
        yield put(signInFailure(error))
    }
}
export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isAuthenticated)
}

export function* onSignOut(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOutTime)
}

export function* signOutTime(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }
    catch(error){
        yield put(signOutFail(error))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* signUp({payload: {email,password,displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(userSignUpSuccess(
            {
                user: user,
                additionalData: {displayName}
            })
        )
    }
    catch(error){
        yield put(userSignUpFail(error))
    }
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* signInAfterSignUp({
    payload: {
            user,
            additionalData
        }
    }){
        yield getSnapshotFromUserAuth(user,additionalData)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOut),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}
