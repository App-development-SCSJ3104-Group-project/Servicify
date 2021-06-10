import { UserActionTypes } from "./users_types";
const initState = {

    submitted: false,
    loading: false,
    users: [],
    duplicateUserEmail: null,
    IsUserInfoValid: null,
    userInAuth: null

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

                }
            }

    }
    return state;
}
export default usersReducer