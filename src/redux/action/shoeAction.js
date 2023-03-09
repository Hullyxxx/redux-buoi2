import { ADD_SHOE, DECREASE_NUMBER, INCREASE_NUMBER, REMOVE_SHOE } from "../constants/shoeConstants";

export const addToCart = (payload) => ({
  type: ADD_SHOE,
  payload: payload
})

export const removeCart = (payload) => ({
  type: REMOVE_SHOE,
  payload: payload,
})

export const indcreaseNumber = (payload) => ({
  type: INCREASE_NUMBER,
  payload
})

export const decreaseNumber = (payload) => ({
  type: DECREASE_NUMBER,
  payload
})



