import React, {createContext, useReducer} from "react";
import TransactionReducer from "./TransReducer.js";


const initialTransactions = [
    {id:1, amount: 500, desc: "Cash"},
    {id:2, amount: -700, desc: "Book"},
    {id:3, amount: 900, desc: "Headphones"}
]

export const TransactionContext = createContext(initialTransactions);
export const deleteTransaction = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transObj
        }
        )
    }
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        })
    }


return(
    <TransactionContext.Provider value={
        {
        transactions: state,
        addTransaction,
        deleteTransaction
    }
    }>
        {children}
    </TransactionContext.Provider>
)
}