import axios from "axios"
import { ordersActionType } from "./orders_action_type"


export const storeData = (data) => ({

    type: ordersActionType.loadOrders,
    data: data,

})

export const loadData = (id) => {

    return (dispatch) => {

        axios.post("http://localhost:5000/orders/" + id, { isServiceProvider: false }).then(res => {

            const data = res.data.data;

            return dispatch(storeData(data))

        }).catch(err => {
            const errorMsg = err.message;
        })


    }
}