import { RequestsActionType } from "./request_action_type";

const initState =
{
    loading: false,
    requests: []
}

const requestsReducer = (state = initState, action) => {

    switch (action.type) {

        case RequestsActionType.SET_LOADING:
            {
                return {
                    ...state,
                    loading: action.value
                }
            }
        case RequestsActionType.GET_REQUESTS:
            {
                return {
                    ...state,
                    requests: action.value
                }
            }
    }
    return state;
}
export default requestsReducer