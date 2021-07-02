import { UserActionTypes } from "./users_types";
const initState = {

    submitted: false,
    users: [],
    duplicateUserEmail: null,
    loading: false,
    IsUserInfoValid: null,
    userInAuth: null,
    user: null

}
const usersReducer = (state = initState, action) => {

    switch (action.type) {



        // fetching
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
                    userInAuth: action.users[0],
                    loading: false,
                }
            }
        case UserActionTypes.FETCH_USERS_FAILED:
            {

                return {

                    ...state,
                    loading: false
                }
            }
        //validation
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

        //duplication
        case UserActionTypes.EMAIL_Availability_SUCESS:
            {
                return {

                    ...state,
                    duplicateUserEmail: false,
                    loading: false

                }
            }
        case UserActionTypes.RESET_LOGIN_STATE:
            {

                return {

                    ...state,
                    loading: false,
                    IsUserInfoValid: null,
                }
            }
        case UserActionTypes.USER_LOGUT:
            {

                return {

                    ...state,
                    userInAuth: null
                }
            }
        case UserActionTypes.RESET_SIGNUP_STATE:
            {
                return {

                    ...state,
                    loading: false,
                    duplicateUserEmail: null,

                }
            }
        case UserActionTypes.EMAIL_Availability_FAILURE:
            {


                return {
                    ...state,
                    duplicateUserEmail: true,
                    loading: false
                }
            }

        case UserActionTypes.SET_LOADING: {
            return {
                ...state,
                loading: action.value
            }
        }
        case UserActionTypes.SET_USER: {
            return {
                ...state,
                user: action.data
            }
        }
    }
    return state;
}
export default usersReducer