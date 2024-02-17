import { ADD_PRODUCT, ADD_QUANITY, REMOVE_QUANITY } from "./actionTypes"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const addQuantity = (productId, quantity) => {
    return {
        type: ADD_QUANITY,
        payload: {
            productId,
            quantity
        }
    }
}

export const removeQuantity = (productId) => {
    return {
        type: REMOVE_QUANITY,
        payload: productId
    }
}