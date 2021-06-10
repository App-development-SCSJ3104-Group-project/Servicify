import { UserActionTypes } from "./users_types";
const initState = {

    submitted: false,
    loading: false,
    users: [],
    duplicateUserEmail: false,
    IsUserInfoValid: null,
    userInAuth: null

}
const usersReducer = (state = initState, action) => {

    switch (action.type) {




        case UserActionTypes.FETCH_USERS_REQUEST:
            {

                return {

                    ...state,
                    loading: true
                }
            }

        case UserActionTypes.FETCH_USERS_SUCESS:
            {

                return {
                    ...state,
                    users: action.users,
                    loading: false,
                }
            }
        case UserActionTypes.VALID_USER_SUCESS:
            {

                return {

                    ...state,
                    userInAuth: action.user,
                    IsUserInfoValid: true,
                    loading: false

                }
            }
        case UserActionTypes.VALID_USER_FAILED:
            {

                return {
                    ...state,
                    IsUserInfoValid: false,
                    loading: false

                }
            }
        case UserActionTypes.FETCH_USERS_FAILED:
            {

                return {

                    ...state,
                    loading: false
                }
            }

    }
    return state;
}
export default usersReducer