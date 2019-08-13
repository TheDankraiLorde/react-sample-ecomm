import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

const userRed = (state = INITIAL_STATE, action) => 
{    
    switch (action.type) 
    {
        case UserActionTypes.SCU:
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
}

export default userRed;