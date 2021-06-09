import { UserActionTypes } from "./users_types";
const initState = {

    submitted: false,
    loading: false,
    users: []

}
const usersReducer = (state = initState, action) => {

    switch (action.type) {

        case "SUBMIT_FORM":

            return {
                ...state,
                submitted: !initState.submitted
            }


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
                    users: action.payload
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