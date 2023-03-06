import { dataShoe } from "../../ShoeShop/dataShoe";
import { ADD_SHOE } from "../constants/shoeConstants";

let initalValue = {
    shoe: dataShoe,
    cart: []
}

export const shoeReducer = ((state=initalValue, action) => {
    switch(action.type) {
        case ADD_SHOE:
            return {...state, cart: [...state.cart, action.payload]}
        default:
            return state;
    }
}) 