import { ADD_PRODUCT, ADD_QUALITY, REMOVE_QUALITY } from "./actionTypes"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const addQuantity = (productId, quantity) => {
    return {
        type: ADD_QUALITY,
        payload: {
            productId,
            quantity
        }
    }
}

export const removeQuantity = (productId) => {
    return {
        type: REMOVE_QUALITY,
        payload: productId
    }
}