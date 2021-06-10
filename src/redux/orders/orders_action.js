import axios from "axios"
import { ordersActionType } from "./orders_action_type"


export const storeData = (data) => ({

    type: ordersActionType.loadOrders,
    data: data,

})

export const loadData = (userId = "dsfhjkgkjhsdfiljq") => {
    
    return (dispatch) => {

        axios.get("https://service-backend-web.herokuapp.com/orders", { userId: userId }).then(res => {

            const data = res.data;
            console.log("orders data");
            console.log(data);

            return dispatch(storeData(data))

        }).catch(err => {
            const errorMsg = err.message;
            console.log(errorMsg)
        })


    }
}
