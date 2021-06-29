import axios from "axios"
import { ordersActionType } from "./orders_action_type"


export const storeData = (data) => ({

    type: ordersActionType.loadOrders,
    data: data,

})

export const loadData = (userInfo) => {

    return (dispatch) => {

        axios.post("https://service-backend-web.herokuapp.com/orders", { customerId: userInfo._id }).then(res => {

            const data = res.data.data;

            return dispatch(storeData(data))

        }).catch(err => {
            const errorMsg = err.message;
        })


    }
}