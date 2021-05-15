import { data } from '../data'

const INITIAL_STATE = {
    bookList: data,
    cart: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEPETE_EKLE':
            return { ...state, cart: [...state.cart, action.payload] } //statiyi aç, cartın içine cartı açıp içine action.paload ekle
        default:
            return state
    }
}