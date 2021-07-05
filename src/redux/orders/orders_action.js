// @ts-nocheck
import axios from "axios"
import { ordersActionType } from "./orders_action_type"


export const storeData = (data) => ({

    type: ordersActionType.loadOrders,
    data: data,

})


export const setLoading = (value) => ({

    type: ordersActionType.SET_LOADING,
    value,

})

export const setStatus = (id) => {

    return (dispatch) => {

        setLoading(true)
        // axios.get("https://service-backend-web.herokuapp.com/orders/" + id, { status: data }).then(res => {
        axios.patch("http://localhost:5000/orders/" + id, { status: "Done" }).then(res => {

            setLoading(false)

        }).catch(err => {
            const errorMsg = err.message;
        })

    }

}

export const loadData = (id) => {

    return (dispatch) => {


        axios.get("https://service-backend-web.herokuapp.com/orders/?id=" + id, +"&type=false").then(res => {

            const data = res.data;
            return dispatch(storeData(data))

        }).catch(err => {
            const errorMsg = err.message;
        })

    }

}


export const loadDashboardData = (id) => {

    return (dispatch) => {


        axios.get("https://service-backend-web.herokuapp.com/orders/?id=" + id + "&type=true").then(res => {

            const data = res.data;
            return dispatch(storeData(data))

        }).catch(err => {
            const errorMsg = err.message;
        })


    }
}


export const giveFeedback = (id, description, rate) => {

    return (dispatch) => {

        axios.patch("https://service-backend-web.herokuapp.com/orders/add_feedback/" + id, { feedback: description, rate: rate }).then(res => {
            // axios.patch("http://localhost:5000/orders/add_feedback/" + id, { feedback: description, rate: rate }).then(res => {

            const currentUser = JSON.parse(localStorage.getItem("user"));

            dispatch(loadData(currentUser._id))

        }).catch(err => err.message)


    }
}