import React, {createContext, useReducer} from "react";
import TransactionReducer from './transreducer';


const initialTransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -700, desc: "Book"},
    {amount: 900, desc: "Headphones"}
]

export const TransactionContext = createContext(initialTransactions);
export const deleteTransaction = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        }
        )
    }
    function deleteTransaction(ind){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: ind,
        })
    }


return(
    <TransactionContext.Provider value={{
        transactions: state,
        addTransaction,
        deleteTransaction
    }}>
        {children}
    </TransactionContext.Provider>
)
}