import { dataShoe } from "../../ShoeShop/dataShoe";

let initalValue = {
    shoe: dataShoe
}

export const shoeReducer = ((state=initalValue, action) => {
    switch(action.type) {
        default:
            return state;
    }
}) 