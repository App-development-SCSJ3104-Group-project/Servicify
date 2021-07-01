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
            payment: data.payment,
            location: data.location
        }

        axios.post("https://service-backend-web.herokuapp.com/requests/create", req).then(res => {
            dispatch(setLoading(false))

        })

    }
}
export const setLoading = (value) => ({
    type: RequestsActionType.SET_LOADING,
    value
})

export const setRequest = (value) => ({
    type: RequestsActionType.GET_REQUESTS,
    value
})

export const getRequest = (id) => {
    return (dispatch) => {
        dispatch(setLoading(true))

        axios.get("https://service-backend-web.herokuapp.com/requests/" + id, { isServiceProvider: false }).then(res => {

            dispatch(setLoading(false))
            dispatch(setRequest(res.data))
        })

    }
}
export const getServiceProviderRequest = (id) => {
    return (dispatch) => {
        dispatch(setLoading(true))

        axios.get("https://service-backend-web.herokuapp.com/requests/" + id, { isServiceProvider: true }).then(res => {

            dispatch(setLoading(false))
            dispatch(setRequest(res.data))
        })

    }
}
export const cancelRequest = (id, customerId) => {
    return (dispatch) => {
        dispatch(setLoading(true))

        axios.patch("https://service-backend-web.herokuapp.com/requests/" + id, { status: "Canceled" }).then(res => {

            getRequest(customerId)
            dispatch(setLoading(false))
        })

    }
}
export const acceptRequest = (id, customerId) => {
    return (dispatch) => {
        dispatch(setLoading(true))

        axios.patch("https://service-backend-web.herokuapp.com/requests/" + id, { status: "Accepted" }).then(res => {

            getServiceProviderRequest(customerId)
            dispatch(setLoading(false))
        })

    }
}