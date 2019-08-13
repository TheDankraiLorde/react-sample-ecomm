const INITIAL_STATE = {
    currentUser: null
}

const userRed = (state = INITIAL_STATE, action) => {
    switch (action.TYPE) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userRed;