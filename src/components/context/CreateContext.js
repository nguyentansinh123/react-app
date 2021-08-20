import React from 'react'
import { useReducer } from 'react'
import CreateContext from './CreateContextTorender'
import {SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM} from'./Types/Type'
import CartReducer from'./CartReducer'

export const ContextProvider = ({children})=>{
    const initialState={
        cartItem:[],
    }
    const [state , dispatch]=useReducer(CartReducer , initialState)
    const addToCart=id=>{
        dispatch({type:ADD_TO_CART,payload:id})
    }
    const removeItem = id=>{
        dispatch({type:REMOVE_ITEM,payload:id})
    }
    return (
        <CreateContext.Provider value={{
            cartItem:state.cartItem,
            addToCart,
            removeItem
        }}>{children}</CreateContext.Provider>
    )
}