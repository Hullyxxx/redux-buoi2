import { dataShoe } from "../../ShoeShop/dataShoe";
import { ADD_SHOE, DECREASE_NUMBER, INCREASE_NUMBER, REMOVE_SHOE } from "../constants/shoeConstants";

let initalValue = {
    shoe: dataShoe,
    cart: []
}

export const shoeReducer = ((state = initalValue, action) => {
    switch (action.type) {
        case ADD_SHOE:
            {
                let cloneCart = [...state.cart]
                let index = cloneCart.findIndex(item => {
                    return item.id === action.payload.id
                })
                if (index === -1) {
                    let newShoe = { ...action.payload, quantity: 1 }
                    cloneCart.push(newShoe)
                } else {
                    cloneCart[index].quantity++
                }
                return { ...state, cart: cloneCart }
            }
        case REMOVE_SHOE:
            {
                let arrayCart = [...state.cart]
                let index = arrayCart.findIndex(item => {
                    return item.id == action.payload
                })
                if (index != -1) {
                    arrayCart.splice(index, 1)
                }
                return { ...state, cart: arrayCart }
            }
        case INCREASE_NUMBER:
            {
                let arrayCart = [...state.cart]
                let index = arrayCart.findIndex(item => {
                    return item.id === action.payload
                })
                if (index != -1) {
                    arrayCart[index].quantity++;
                }
                return { ...state, cart: arrayCart }
            }
        case DECREASE_NUMBER:
            {
                let arrayCart = [...state.cart]
                let index = arrayCart.findIndex(item => {
                    return item.id === action.payload
                })
                if (index != -1) {
                    if (arrayCart[index].quantity > 1) {
                        arrayCart[index].quantity--;
                    }
                }
                return { ...state, cart: arrayCart }
            }
        default:
            return state;
    }
})