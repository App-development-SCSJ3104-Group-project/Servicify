import { ordersActionType } from "./orders_action_type"

const initState =
{
    ordersList: [],
    loading: false
}

const ordersReducer = (state = initState, action) => {


    switch (action.type) {

        case ordersActionType.loadOrders:
            return {
                ...state,
                ordersList: action.data
            }

    }
    switch (action.type) {

        case ordersActionType.SET_LOADING:
            return {
                ...state,
                loading: action.value
            }

    }
    return state;
}

export default ordersReducer