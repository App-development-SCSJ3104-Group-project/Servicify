import axios from "axios"
import { RequestsActionType } from "./request_action_type"
export const makeRequest = (data) => {
    return (dispatch) => {

        dispatch(setLoading(true))
        const req = {
            customerId: data.customerId,
            serviceProviderId: data.serviceProviderId,
            description: data.description,
            fees: data.fees,
            location: data.location
        }
        
        axios.post("http://localhost:5000/requests/create", req).then(res => {
            dispatch(setLoading(false))

        })

    }
}
export const setLoading = (value) => ({
    type: RequestsActionType.SET_LOADING,
    value
})
