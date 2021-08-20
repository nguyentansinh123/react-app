import React from 'react'
import {SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM} from'./Types/Type'
const CartReducer = (state , action) => {
    switch(action.type){
        case ADD_TO_CART :{
            return{
                ...state,
                cartItem:[...state.cartItem,action.payload]
                
            }
     }
        case REMOVE_ITEM:{
            return{
                ...state,
                cartItem:state.cartItem.filter(item=>item.id!== action.payload)
            }
        }
        default:
            return state
    }
}

export default CartReducer
